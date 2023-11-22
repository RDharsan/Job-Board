const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const jobSchema = new Schema({

    jobtitle: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)