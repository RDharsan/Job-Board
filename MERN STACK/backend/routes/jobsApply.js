const express = require('express')
const {
    createJobApply,
    getJobsApply,
    getJobApply,
    deleteJobApply,
    updateJobApply,
    getJobs
} = require('../controllers/jobApplyController')

const router = express.Router()

//GET all jobs
router.get('/', getJobsApply)

//GET a single jobs
router.get('/:id', getJobApply)

//POST a new jobs
router.post('/', createJobApply)
router.get('/', getJobs)


//DELETE a  job
router.delete('/:id', deleteJobApply)

//UPDATE a new job
router.patch('/:id', updateJobApply)

module.exports=router