const Job = require('../models/JobsModel')
const mongoose = require('mongoose')

//get all workouts
const getJobs = async(req, res)=>{
    const jobs = await Job.find({}).sort({createdAt: -1})
    res.status(200).json(jobs)
}

//get a single workout
const getJob = async(req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Jobs'})
    }

    const job = await Job.findById(id)
    if(!job){
        return res.status(404).json({error:'No such Jobs'})
    }

    res.status(200).json(job)
}

//create new workout
const createJob = async(req, res) =>{
    const{jobtitle, place, description} = req.body

    let emptyFields = []

    if(!jobtitle){
        emptyFields.push('jobtitle')
    }
    if(!place){
        emptyFields.push('place')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    //add doc to db
    try{
        const job = await Job.create({jobtitle, place, description})
        res.status(200).json(job)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

//delete workout
const deleteJob = async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Job'})
    }
    
    const job = await Job.findOneAndDelete({_id: id})

    if(!job){
        return res.status(404).json({error:'No Such Job'})
    }

    res.status(200).json(job)

}

//update a workout
const updateJob = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Job'})
    }

    const job = await Job.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!job){ 
        return res.status(404).json({error:'No such Job'})
    }

    res.status(200).json(job)
}

module.exports = {
    createJob,
    getJobs,
    getJob,
    deleteJob,
    updateJob
    
}
