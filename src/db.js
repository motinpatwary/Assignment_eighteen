const mongoose = require('mongoose');
const {MONGODB_URL} = require('../../secret');
const dbConnection = async() => {
    await mongoose.connect(MONGODB_URL, {autoIndex: true})
    console.log('database connected successfully')
}

module.exports = dbConnection;

