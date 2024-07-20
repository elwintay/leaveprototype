const express = require('express')
const {createLeave, 
    getLeaves, 
    getSingleLeave, 
    deleteLeave, 
    updateLeave, 
    getUserLeave} = require('../controllers/leaveController')

const router = express.Router()

//GET all leaves
router.get('/', getLeaves)

//GET a single leave
router.get("/:id", getSingleLeave)

//GET user leave
router.get("/user/:user", getUserLeave)

//POST a new leave
router.post('/', createLeave)

//DELETE a new leave
router.delete('/:id', deleteLeave)

//UPDATE a new leave
router.patch('/:id', updateLeave)

module.exports = router