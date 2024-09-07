const blockModel = require('../models/blockModel')
const mongoose = require('mongoose')

// get all blocks
const getBlocks = async (req, res) => {
    const blocks = await blockModel.find({}).sort({startDate: -1})
    res.status(200).json(blocks)
}

//get a single block
const getSingleBlock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such block'})
    }
    const block = await blockModel.findById(id)

    if (!block) {
        return res.status(404).json({error: "No such block"})
    }

    res.status(200).json(block)
}

//get a single block
const getUserBlock = async (req, res) => {
    const { user } = req.params
    const block = await blockModel.find({user: user}).sort({startDate: -1})

    if (!block) {
        return res.status(404).json({error: "No such block"})
    }

    res.status(200).json(block)
}

//create new block
const createBlock = async(req, res) => {
    const {user, team, blockType, startDate, endDate} = req.body
    try {
        const block = await blockModel.create({user, team, blockType, startDate, endDate})
        res.status(200).json(block)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a block
const deleteBlock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such block'})
    }

    const block = await blockModel.findOneAndDelete({_id: id})

    if (!block) {
        return res.status(404).json({error: "No such block"})
    }

    res.status(200).json(block)
}

//update a block
const updateBlock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such block'})
    }

    const block = await blockModel.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!block) {
        return res.status(404).json({error: "No such block"})
    }

    res.status(200).json(block)
}

module.exports = {
    createBlock,
    getBlocks,
    getSingleBlock,
    getUserBlock,
    deleteBlock,
    updateBlock
}