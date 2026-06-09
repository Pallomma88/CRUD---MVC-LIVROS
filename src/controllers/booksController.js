const getAllUsers = (req, res) => {
    return res.json([
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin"
        }
    ])
}

module.exports = {
    getAllUsers
}