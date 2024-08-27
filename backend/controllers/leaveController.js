const leaveModel = require('../models/leaveModel')
const mongoose = require('mongoose')

// get all leaves
const getLeaves = async (req, res) => {
    const leaves = await leaveModel.find({}).sort({date: -1})

    if (!leaves) {
        return res.status(404).json({error: "No leaves available"})
    }

    res.status(200).json(leaves)
}

//get a single leave
const getSingleLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such leave'})
    }
    const leave = await leaveModel.findById(id)

    if (!leave) {
        return res.status(404).json({error: "No such leave"})
    }

    res.status(200).json(leave)
}

//get user leave
const getUserLeave = async (req, res) => {
    const { user } = req.params
    const leave = await leaveModel.find({user: user}).sort({date: -1})

    if (!leave) {
        return res.status(404).json({error: "No such leave"})
    }

    res.status(200).json(leave)
}

//create new leave
const createLeave = async(req, res) => {
    const {user, team, leaveType, shift, date} = req.body
    try {
        const leave = await leaveModel.create({user, team, leaveType, shift, date})
        res.status(200).json(leave)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//delete a leave
const deleteLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such leave'})
    }

    const leave = await leaveModel.findOneAndDelete({_id: id})

    if (!leave) {
        return res.status(404).json({error: "No such leave"})
    }

    res.status(200).json(leave)
}

//update a leave
const updateLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such leave'})
    }

    const leave = await leaveModel.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!leave) {
        return res.status(404).json({error: "No such leave"})
    }

    res.status(200).json(leave)
}

module.exports = {
    createLeave,
    getLeaves,
    getSingleLeave,
    getUserLeave,
    deleteLeave,
    updateLeave
}