const Book = require('../models/book.js');

//all the router related with book

const getAllBooks = async (req, res)=>{
    try {
        const getAllBooks = await Book.find({});
        if(getAllBooks?.length > 0){
            res.status(200).json({
                success:true,
                message:"Books data fetched successfuly",
                data:getAllBooks
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Books data not found"
            });
        }
    } catch (error) {
        console.log('Error occured while fetching books data');
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        })
    }
}
const getSingleBookById = async (req, res) =>{
    try {
        const getAbook = req.params.id;
        const getBookDetailsById = await Book.findById(getAbook);

        if(!getBookDetailsById){
            res.status(404).json({
                success:false,
                message:"Book with the current ID not found! Please try again with the different book ID"
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Book details fetched successfuly",
                data:getBookDetailsById
            })
        }
    } catch (error) {
        console.log('Error occured while fetching a single book', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        })
    }
}

const addNewBook = async (req, res) =>{
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newBookFormData){
            res.status(201).json({
                success:true,
                message:"Book added successfuly",
                data:newlyCreatedBook
            });
        }
    } catch (error) {
        console.log('Error while adding a book', error);
        res.status(500).json({
            success:false,
            message:"Book added failed"
        });
    }
}

const updateSingleBookById = async (req, res) =>{
   try {
     const updateBook = req.params.id;
     const updatedBookById = await Book.findByIdAndUpdate(updateBook, req.body, {new:true, runValidators:true});
     if(!updatedBookById){
        res.status(404).json({
            success:false,
            message:"Book not found! Please check the ID again..."
        });
     }else{
        res.status(200).json({
            success:true,
            message:"Book updated successfuly",
            data:updatedBookById
        })
     }
   } catch (error) {
        console.log('Error occured while updating book', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        });
   }
}

const deleteBookById = async (req, res) =>{
    try {
        const BookByID = req.params.id;
        const deletedBookById = await Book.findByIdAndDelete(BookByID);
        if(!deletedBookById){
            res.status(404).json({
                success:false,
                message:"Book with ID is not found! Please check the book ID again..."
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Book deleted successfuly"
            });
        }
    } catch (error) {
        console.log('Error occured while deleting book', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        });
    }
}

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateSingleBookById, deleteBookById};