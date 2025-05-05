const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "le nom est requis"],
        match : [
            /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
            "le titre doit etre valide"
        ]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    author: {
        type: String,
        required: [true, "le mot de passe est requis"],
        match: [
           /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
            "ecriver l'auteur correctement"
        ]
    },
    publishedDate : {
        type : Date,
        required: [true, "la date est requise"]
    },
    genre : {
        type: String,
        required: [true, "le genre est requise"],
        match: [
            /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
            "ecrit bien le genre"
        ]
    }
})

const bookModel = mongoose.model("books", bookSchema)
module.exports = bookModel 