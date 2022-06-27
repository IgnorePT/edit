"use strict";

const queryParameters = new URLSearchParams(window.location.search);

const getApiUrl = (id) => {
    return `api/getProduct?productId=${id}`
}

const resetStyleSizeButtons = (sizeButtons) => {
    sizeButtons.forEach(sizeButton => sizeButton.classList.remove("active"));
}

const activateAddToCart = () => {
    document.querySelector(".cart > button").disabled = false;
}

const setMaximumQuantity = (quantity) => {
    const input = document.querySelector('input[name=qty]');
    input.value = 1;
    input.setAttribute("max", quantity);
}

const setFeaturedImage = (image) => {
    document.getElementById("image").src = image;
}

const setProductScore = (score) => {
    const stars = document.querySelectorAll("#score > .icn-star");

    stars.forEach((star, index) => {
        if (index < Math.round(score)) {
            star.classList.add("primary")
        }
    })
}

const setProductSizes = (sizes) => {

    const sizeButtons = document.querySelectorAll(".sizebtns > button");
    const availableSizes = Object.keys(sizes);

    sizeButtons.forEach((sizeButton) => {
        
        if (availableSizes.includes(sizeButton.innerText)) {
            sizeButton.disabled = false;
         
            sizeButton.addEventListener("click", function () {
                activateAddToCart();
                resetStyleSizeButtons(sizeButtons);
                setMaximumQuantity(sizes[sizeButton.innerText]);    
                this.classList.add("active");
            })
        }
    })
}

const setTextElement = (selector, text) => {
    document.getElementById(selector).innerText = text;
}

const setProductTextData = ({ name, price, brand, description, madeIn, partnership }) => {
    setTextElement("name", name);
    setTextElement("brand", brand);
    setTextElement("description", description);
    setTextElement("madeIn", madeIn);
    setTextElement("price", price);
    setTextElement("partnership", partnership);
}

const activateQuantityButtons = () => {

    const input = document.querySelector('input[name=qty]');

    document.getElementsByClassName('btnright')[0].addEventListener("click", () => {
       
        if (input.value < input.getAttribute("max")) {
            input.value = parseInt(input.value) + 1;
        }
    })
    document.getElementsByClassName('btnleft')[0].addEventListener("click", () => {
        if (input.value > input.getAttribute("min")) {
            input.value = parseInt(input.value) - 1;
        }
    })
}

window.addEventListener("DOMContentLoaded", async () => {

    const productId = queryParameters.get("id");
    const response = await fetch(getApiUrl(productId));
    const product = await response.json();

    console.log(product);

    setProductTextData(product);
    setFeaturedImage(product.image);
    setProductScore(product.score);
    setProductSizes(product.sizes);

    activateQuantityButtons();
});


