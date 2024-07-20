const express = require('express')
const {createBlock, 
    getBlocks, 
    getSingleBlock, 
    deleteBlock, 
    updateBlock, 
    getUserBlock} = require('../controllers/blockController')

const router = express.Router()

//GET all leaves
router.get('/', getBlocks)

//GET a single leave
router.get("/:id", getSingleBlock)

//GET user leave
router.get("/user/:user", getUserBlock)

//POST a new leave
router.post('/', createBlock)

//DELETE a new leave
router.delete('/:id', deleteBlock)

//UPDATE a new leave
router.patch('/:id', updateBlock)

module.exports = router