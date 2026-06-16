const booksModel = require("../models/booksModel")

const getAllBooks = (req, res) => {
    const books = booksModel.findall()
    
    return res.json(books)
}

 const createBooks = (req, res) => {
       const {title, author} = req.body

   const newBooks = {
    id: Date.now(),
    title, author
    }
    const createBooks = booksModel.create(newBooks)

    return res.status(201).json(createBooks)

    }

module.exports = {
    getAllBooks,
    createBooks

}
