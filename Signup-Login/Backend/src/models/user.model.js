const { JWT } = require("jsonwebtoken")
const mongoose = require("mongoose")
require("dotenv").config()

const Joi = require("joi")                                                                // joi is The most powerful schema description language and data validator for JavaScript.
const PasswordComplexity = require("joi-password-complexity")                            //it Creates a Joi object that validates password complexity.




const userSchema = new mongoose.Schema({
    first_Name: { type: String, require: true },
    last_Name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    // confirm_password: { type: String, require: true }
})

userSchema.methods.AuthTokenGenerete = function () {
    const token = JWT.sign({ _id: this._id }, process.env.JWTKEY, { expiresIn: '30d' })
    return token
}

const User = mongoose.model("user", userSchema)


const ValidateSchema = (data) => {
    const schema = Joi.object({
        first_Name: Joi.string().required().label("First Name"),
        last_Name: Joi.string.required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: PasswordComplexity().required().label("Password")
    })
    return schema.ValidateSchema(data)
}


module.exposts = { User, ValidateSchema }

