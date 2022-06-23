const queryParameters = new URLSearchParams(window.location.search);

const getApiUrl = (id) => {
    return `api/getProduct?productId=${id}`
}

const setTextElement = (selector, text) => {
    document.getElementById(selector).innerText = text;
}

const setFeaturedImage = ({ image }) => {
    document.getElementById("image").src = image;
}

const setProductScore = ({ score }) => {
    const stars = document.querySelectorAll("#score > .icn-star");

    stars.forEach((star, index) => {
        if (index < Math.round(score)) {
            star.classList.add("primary")
        }
    })
}

const resetStyleSizeButtons = (sizeButtons) => {
    sizeButtons.forEach(sizeButton => sizeButton.classList.remove("active"));
}

const setMaximumQuantity = (quantity) => {
   const input = document.querySelector('input[name=qty]');
   input.setAttribute("max", quantity);
} 

const setProductSizes = ({ sizes }) => {
    
    const sizeButtons = document.querySelectorAll(".sizebtns > button");
    const availableSizes = Object.keys(sizes);

    sizeButtons.forEach((sizeButton) => {
        if (availableSizes.includes(sizeButton.innerText)) {
            sizeButton.disabled = false;
        }

        sizeButton.addEventListener("click", function(){
            resetStyleSizeButtons(sizeButtons);
            setMaximumQuantity(sizes[sizeButton.innerText]);
            this.classList.add("active");
        })
    })
}

const setProductTextData = ({ name, price, brand, description, madeIn, partnership }) => {
    setTextElement("name", name);
    setTextElement("brand", brand);
    setTextElement("description", description);
    setTextElement("madeIn", madeIn);
    setTextElement("price", price);
    setTextElement("partnership", partnership);
}

window.addEventListener("DOMContentLoaded", async () => {

    const productId = queryParameters.get("id");

    const response = await fetch(getApiUrl(productId));
    const product = await response.json();

    setProductTextData(product);
    setFeaturedImage(product);
    setProductScore(product);
    setProductSizes(product);
});


