const express = require('express')
const {
    createJob,
    getJobs,
    getJob,
    deleteJob,
    updateJob
} = require('../controllers/jobController')

const router = express.Router()

//GET all workouts
router.get('/', getJobs)

//GET a single workout
router.get('/:id', getJob)

//POST a new workout
router.post('/', createJob)

//DELETE a  workout
router.delete('/:id', deleteJob)

//UPDATE a new workout
router.patch('/:id', updateJob)

module.exports=router