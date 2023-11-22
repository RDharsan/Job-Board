require('dotenv').config()
//entry application for backend application
const express = require('express')
const mongoose = require('mongoose')
const jobRoutes = require('./routes/jobs')
const jobApplyRoutes = require('./routes/jobsApply')

//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/jobs/', jobRoutes)
app.use('/api/jobsApply/', jobApplyRoutes)
//when we fire a request to this route ryt here, then i want to use these routes

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })


// dot env file to process.env object

