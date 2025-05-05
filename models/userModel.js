const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"],
        match : [
            /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
            "le nom doit etre valide"
        ]
    },
    age: {
        type: Number,
        required: [true, "l'age' est requis"],
        min: 7,
        max: 120
    },
    password: {
        type: String,
        required: [true, "le mot de passe est requis"],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "Le mot de passe doit contenir au moins 8 car, une maj, et un caractere spe"
        ]
    },
    email: {
        type: String,
        required: [true, "l'email est requis"],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            "entrez un email valide"
        ],
        validate: {
            validator : async function (value) {
                const count = await mongoose.models.users.countDocuments({email : value})
                return count === 0
            },
            message : "Cet email est deja utilisé"
        }
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel 