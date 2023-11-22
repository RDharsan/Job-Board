const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const jobsApplySchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    jobPosition:{
        type: String,
        required: true
    },
    workEx: {
        type: String,
        required: true
    },
    educationDetails: {
        type: String,
        required: true
    },
    projectEx: {
        type: String,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('JobApply', jobsApplySchema)