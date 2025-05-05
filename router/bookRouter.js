const bookRouter = require('express').Router()
const bookController = require('../controllers/bookController')

bookRouter.post('/users/:id/books', bookController.postBook)
bookRouter.get('/users/:id/books' , bookController.getBooksByUser)
bookRouter.put('/books/:id' , bookController.putBook)
bookRouter.delete('/users/:userid/books/:id' , bookController.deleteBook)

module.exports = bookRouter