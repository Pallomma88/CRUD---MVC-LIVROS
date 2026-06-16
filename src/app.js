

const express = require("express")

const booksController = require("./controllers/booksController")

const app = express()

app.get("/", (request, response) => {
    response.send("Olá Pallomma!")
})

app.get("/books", booksController.getAllBooks)

app.post("/books", (req, res) => {
    const createBooks = (req, res) => {
   const {name} = req.body

   const newBooks = {
    id: Date.now(),
    name: name


    }
   }

    res.send("Estamos testando!")
})

module.exports = app
