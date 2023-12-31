const mongoose = require("mongoose");
const db = require("../db-connection/connection");

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'VENDOR'],
        default: 'USER'
    },
    token: {
       type: String 
    }
});

const vendorModel = db.model('vendor', vendorSchema);

module.exports = vendorModel;