const express = require('express');
const {getAllBooks, getSingleBookById, addNewBook ,updateSingleBookById, deleteBookById} = require('../controllers/book-controller.js')
//create express router
const router = express.Router()

//all the routes that are related with book
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBookById);
router.delete('/delete/:id', deleteBookById);

module.exports = router;
