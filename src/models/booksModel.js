const books = [
    
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin"
        }
]
   
    const findall = () => {
        return books
    }

    const create = (books) => {
        books.push(books)

        return books
    }


    
    module.exports = {
        create,
        findall
    }