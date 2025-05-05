const bookModel = require("../models/bookModel");
const userModel = require("../models/userModel");

exports.postBook = async (req,res) => {
    try {
        req.body.user = req.params.id
        const newBook = new bookModel(req.body)
        await newBook.save()
        await userModel.updateOne({_id : req.params.id}, {$push : {books : newBook._id}})
        res.json({message : "book created" , book : newBook})
    } catch (error) {
        res.json(error.message)
    }
}

exports.getBooksByUser = async (req, res)=>{
    try {
        const bookUser = await userModel.findById(req.params.id).populate("books")
        res.json(bookUser);
    } catch (error) {
        res.json({message : error.message})
    }
}

exports.putBook = async (req,res)=> {
    try {
        const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {runValidators : true, new : true})
        res.json(book)
    } catch (error) {
        res.json({message : error.message})
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await bookModel.findByIdAndDelete(req.params.id)
        await userModel.findByIdAndUpdate(req.params.userid, {$pull : {books : req.params.id}})
        res.json({message : "livre bien sup"})
    } catch (error) {
        res.json({message : error.message})
    }
}

