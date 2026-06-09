

const express = require("express")

const books = require("./controllers/booksController")

const app = express()

app.get("/", (request, response) => {
    response.send("Olá Pallomma!")
})

app.get("/books", (req, res) => {
    return res.json([
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin"
        }
    ])
})

module.exports = app