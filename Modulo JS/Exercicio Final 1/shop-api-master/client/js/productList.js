"use strict";

const availableParameters = {
    numberProducts: "nProducts",
    sortBy: "sortBy",
};

const queryParameters = new URLSearchParams(window.location.search);

const htmlToElement = html => {
    const placeholder = document.createElement('div');
    placeholder.innerHTML = html;
    return placeholder.children.length ? placeholder.firstElementChild : undefined;
};

const getApiUrl = () => {
    const resource = "api/getProductsList";
    const parameters = queryParameters.toString();
    return parameters ? resource + `?${parameters}` : resource;
};

const setParameters = ({ numberProducts, sortBy }) => {
    
    queryParameters.set(availableParameters.numberProducts, (numberProducts) ? numberProducts : 10);

    if (sortBy) {
        queryParameters.set(availableParameters.sortBy, sortBy.toLowerCase());
    }
};

const removeQueryParameters = (parameter) => {
    queryParameters.delete(parameter);
};

const getProductTemplate = ({ id, image, name, price, partnership }) => {
    return `
    <a class="product-card col-6 col-d-4" href="product.html?id=${id}" title="View Product">
        <div class="product-card-image">
            <img class="imgfit" src="${image}" srcs />
        </div>
        <p class="margintophalf marginbottomnone">${name}</p>
        <p class="gray marginnone">${partnership}</p>
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

const handleProductResponse = (products, filterFn) => {

    const mainListELement = document.getElementById("mainproductlist");

    mainListELement.innerHTML = "";
    const fragment = document.createDocumentFragment();

    if(filterFn){
        filterFn(products)  
    }

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

        if(productsResponse.status !== 200){
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

const filterBySize = (products, size) => {
 return products.filter(product => Object.keys(product.sizes).includes(size))
}


window.addEventListener("DOMContentLoaded", () => {
    const sizebtns = document.querySelectorAll(".sizebtns > button");

    sizebtns.forEach(button => {
        button.addEventListener("click", (e) => {
            button.classList.toogle('active');
        })
    })

    const orderBySelector = document.getElementById('sortBy');

    orderBySelector.addEventListener("change", (e) => {
        setParameters({sortBy: e.target.value});
        fetchProductData();
    })
})



