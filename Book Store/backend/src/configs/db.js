require('dotenv').config()

const mongoose = require("mongoose")

const mongoDBURL = process.env.MONGOURL


const ConnectDB = async () => {
    try {
        const Connect = await mongoose.connect(mongoDBURL)
        return Connect;
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = ConnectDB;