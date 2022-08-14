const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const apiDocs = require("./swagger.json");
const { Converter } = require("showdown");
const fs = require("fs");
require("colors");

const app = express();
app.use(cors());

//const { getProducts, getProduct, getUsers, getUser } = require("./resolvers");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    console.log("Root");
    res.send("Root");
});

app.get("/api/destinations", (req, res) => {
    console.log("Destinations");
    res.send("Destinations");
});

app.get("/api/crew", (req, res) => {
    console.log("Crew");
    res.send("Crew");
});

app.get("/api/technology", (req, res) => {
    console.log("TECHNOLOGY");
    res.send("TECHNOLOGY");
});



app.listen(PORT, () => {
    console.log(`----------------------------------------------`.blue);
    console.log(`----------------------------------------------`.blue);
    console.log(`     App is ready at http://localhost:${PORT}`.yellow);
    console.log(`----------------------------------------------`.blue);
    console.log(`----------------------------------------------`.blue);
  });