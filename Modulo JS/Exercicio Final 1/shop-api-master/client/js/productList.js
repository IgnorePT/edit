"use strict";
const queryParameters = new URLSearchParams(window.location.search);

const getApiUrl = () => {
    const resource = "api/getProductsList";
    const parameters = queryParameters.toString();
    window.history.pushState({}, '', `?${parameters}`);

    return parameters ? resource + `?${parameters}` : resource;
};

const setParameters = ({parameter, value}) => {
    queryParameters.set(AVAILABLE_PARAMETERS.numberProducts, (parameter === AVAILABLE_PARAMETERS.numberProducts) ? value : 10);

    if (parameter === AVAILABLE_PARAMETERS.sortBy) {
        queryParameters.set(parameter, value);
    } else {
        queryParameters.append(parameter, value);
    }
};

const removeQueryParameters = (parameter, value) => {

    const paramToRemoveValues = queryParameters.getAll(parameter);

    queryParameters.delete(parameter);

    if (paramToRemoveValues.length >= 1) {

        paramToRemoveValues.filter(param => param != value).forEach(value => setParameters({
            parameter,
            value
        }))
    }
};

const getProductTemplate = ({ id, image, name, price, category }) => {
    return `
    <a class="product-card col-6 col-d-4" href="product.html?id=${id}" title="View Product">
        <div class="product-card-image">
            <img class="imgfit" src="${image}"  srcset="
            ${image} 3x,
            ${image.replace("products", IMAGE_RESOURCES.x2)} 2x,
            ${image.replace("products", IMAGE_RESOURCES.x2)} 1x
           " />
        </div>
        <p class="margintophalf marginbottomnone">${name}</p>
        <p class="gray marginnone">${category.map(id => CATEGORIES[id]).join(", ")}</p>
        <p class="secondary marginnone">$${price}</p>
    </a>
    `;
}

const getLoadMoreButton = () => {
    return `
    <div class="central-link-light marginbottomdouble">
        <a href="#" title="Load More"><i class="icn-reload"></i> Load More</a>
    </div>
    `;
}

const handleProductResponse = (products) => {

    const mainListELement = document.getElementById("mainproductlist");

    mainListELement.innerHTML = "";
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const node = htmlToElement(getProductTemplate(product))
        fragment.appendChild(node);
    });

    const loadMoreButton = htmlToElement(getLoadMoreButton())
    fragment.appendChild(loadMoreButton);

    mainListELement.appendChild(fragment);
}

const fetchProductData = async (params = null) => {
    try {
        const response = await fetch(getApiUrl());
        const productsResponse = await response.json();

        if (productsResponse.status !== 200) {
            return console.error(
                (productsResponse.message)
                    ? productsResponse.message
                    : "Unable to Fetch Products"
            )
        }

        handleProductResponse(productsResponse.data.products);

    } catch (err) {
        console.error(err)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    fetchProductData();
});

window.addEventListener("DOMContentLoaded", () => {

    //Size Buttons
    const sizebtns = document.querySelectorAll(".sizebtns > button");

    const sizesActive = queryParameters.getAll(AVAILABLE_PARAMETERS.size);

    sizebtns.forEach(button => {

        if (sizesActive && sizesActive.includes(button.innerText)) {
            button.classList.add('active');
        };

        button.addEventListener("click", (e) => {
            const value = e.target.innerText;
            
            filtersClickAction({
                element: button,
                parameter: AVAILABLE_PARAMETERS.size,
                value,
                activeClass: 'active'
            });
        })
    })

    //Order Selector
    const orderBySelector = document.getElementById('sortBy');
    if(queryParameters.get(AVAILABLE_PARAMETERS.sortBy)){
        let sortByString = queryParameters.get(AVAILABLE_PARAMETERS.sortBy)
        orderBySelector.value =  sortByString.charAt(0).toUpperCase() + sortByString.slice(1);
    }

    orderBySelector.addEventListener("change", (e) => {
        setParameters({
            parameter: AVAILABLE_PARAMETERS.sortBy,
            value:  e.target.value.toLowerCase() 
        })
        fetchProductData();
    })

    //Categories List
    const categoriesLink = document.querySelectorAll("#categories > li > a");
    const categoriesActive = queryParameters.getAll(AVAILABLE_PARAMETERS.categories);
    categoriesLink.forEach(categorie => {

        const value = categorie.title.toLowerCase()
        if (categoriesActive && categoriesActive.includes(value)) {
            categorie.classList.add('primary');
        }
        categorie.addEventListener('click', (e) => {
            e.preventDefault();

            filtersClickAction({
                element: categorie,
                parameter: AVAILABLE_PARAMETERS.categories,
                value,
                activeClass: 'primary'
            })
        })
    })
})

const filtersClickAction = ({element, parameter, value, activeClass}) => {
    
    if (element.classList.contains(activeClass)) {
        removeQueryParameters(parameter, value);
    } else {
        setParameters({
            parameter,
            value
        })
    }
    element.classList.toggle(activeClass);
    fetchProductData();
}



