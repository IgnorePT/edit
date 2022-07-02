const { Products, setUsers, Users } = require('./db');

const CATEGORIES = {
    1: "snickers",
    2: "coats",
    3: "pants",
    4: "jackets"
}


const SortBy = {
    price: (a,b) => a.price - b.price,
    name: (a,b) => {
        const aProp = a["name"].toUpperCase();
        const bProp = b["name"].toUpperCase();
        if (aProp < bProp) {
            return -1;
          }
        return aProp > bProp ? 1 : 0;
        }
}

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

const filterByCategories = (products, categories) => {

    if(typeof categories === "string"){
         return products.filter(product => product.category.map(category => CATEGORIES[category]).includes(categories));
    }
    return products.filter(product => product.category.map(category => CATEGORIES[category]).some(el => categories.includes(el)));
}

const filterBySize = (products, size) => {

    if(typeof size === "string"){
        return products.filter(product => Object.keys(product.sizes).includes(size));
    }

    return products.filter(product => Object.keys(product.sizes).some(el=> size.includes(el)));

}

const setResponse = ({code = 200, message = "", data = null}) => {
    if(message){
        return { status: code, message }
    }

    return { status: code, data}
}


module.exports = {
    getProducts: function ({nProducts = 10, sortBy = 'price', categories = null, size = null}) {
    
        let sortedProducts =  [...Products];

        if(!sortedProducts[0][sortBy]) {
            return setResponse({
                code: 400,
                message: `sortBy provided (${sortBy}) is invalid. Try one of the product properties instead`
            })
        }

        if(categories){
            sortedProducts = filterByCategories(sortedProducts, categories);
        }

        if(size){
            sortedProducts = filterBySize(sortedProducts, size);
        }

        sortBy === 'price' ? 
        sortedProducts.sort(SortBy.price) : 
        sortedProducts.sort(SortBy.name);
        return {
            status: 200,
            data: {products: sortedProducts.slice(0, nProducts), totalProducts: sortedProducts.length}
        }
    },
    getProduct: function (productId) {
        if(!productId || productId < 1) { 
            return {
                status: 400
            }
        }
        if(Products.length < productId) {
            return {
                status: 404
            }
        }
        const product = Products[productId - 1];
        return {
            status: 200,
            data: product
        };
    },
    getUsers: function () {
        return {
            status: 200,
            data: Users
        }
    },
    getUser: function (username, password) {
        const user = Users.find((user) => user.username === username && user.password === password);
        if(!user) {
            return {
                status: 404,
                data: "Wrong username/password"
            }
        }
        return {
            status: 200,
            data: user
        }
    }
}