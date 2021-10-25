require("dotenv").config();

const express = require("express");
const app = express()
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler")
const port = process.env.PORT || 3000;

app.use(express.json()  )

app.get("/", (req, res) => {
    res.send('<h1>Cafe API</h1><a href="/api/v1/items">Visit API</a>')
})

const start = async () => {
    try {
        app.listen(port, () => {
    console.log("app is listening to http://localhost:3000");
})
    } catch (error) {
        console.log(error);
    }
}

start();

app.use(notFoundMiddleware).use(errorHandlerMiddleware);