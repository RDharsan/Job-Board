const JobApply = require('../models/JobsApplyModel')
const Job = require('../models/JobsModel')

const mongoose = require('mongoose')

//get all jobs applied
const getJobsApply = async(req, res)=>{
    const jobsApply = await JobApply.find({}).sort({createdAt: -1})
    res.status(200).json(jobsApply)
}

const getJobs = async(req, res)=>{
    const jobsApply = await Job.find({}).sort({createdAt: -1})
    res.status(200).json(jobsApply.jobPosition)
}

//get a single job applied
const getJobApply = async(req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Jobs'})
    }

    const jobApply = await JobApply.findById(id)
    if(!jobApply){
        return res.status(404).json({error:'No such Jobs'})
    }

    res.status(200).json(jobApply)
}

//create new Job
const createJobApply = async(req, res) =>{
    const{firstName, lastName, emailAddress,phone, jobPosition, workEx, educationDetails, projectEx} = req.body

    let emptyFields = []

    if(!firstName){
        emptyFields.push('firstName')
    }
    if(!lastName){
        emptyFields.push('lastName')
    }
    if(!emailAddress){
        emptyFields.push('emailAddress')
    }
    if(!phone){
        emptyFields.push('phone')
    }
    if(!jobPosition){
        emptyFields.push('jobPosition')
    }
    if(!workEx){
        emptyFields.push('workEx')
    }
    if(!educationDetails){
        emptyFields.push('educationDetails')
    }
    if(!projectEx){
        emptyFields.push('projectEx')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    //add doc to db
    try{
        const jobApply = await JobApply.create({firstName, lastName, emailAddress,phone,jobPosition, workEx, educationDetails, projectEx})
        res.status(200).json(jobApply)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//delete job Applied
const deleteJobApply = async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Job'})
    }
    
    const jobApply = await JobApply.findOneAndDelete({_id: id})

    if(!jobApply){
        return res.status(404).json({error:'No Such Job'})
    }

    res.status(200).json(jobApply)

}

//update a job applied
const updateJobApply = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Job'})
    }

    const jobApply = await JobApply.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!jobApply){ 
        return res.status(404).json({error:'No such Job'})
    }

    res.status(200).json(jobApply)
}

module.exports = {
    createJobApply,
    getJobsApply,
    getJobApply,
    deleteJobApply,
    updateJobApply,
    getJobs
    
}
