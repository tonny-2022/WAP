
const express = require('express');
const bookController = require('../controllers/booksController');
const router = express.Router();


router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBookById);
router.post('/',bookController.saveBook);
router.put('/:id',bookController.updateBookById);
router.delete('/:id',bookController.deleteBookById);
module.exports=router;