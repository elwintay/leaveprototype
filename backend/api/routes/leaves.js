const express = require('express')
const {createLeave, 
    getLeaves, 
    getSingleLeave, 
    deleteLeave, 
    updateLeave, 
    getUserLeave} = require('../controllers/leaveController')
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router()

//GET all leaves
router.get('/', getLeaves)

//GET a single leave
router.get("/:id", getSingleLeave)

//GET user leave
router.get("/user/:user", requireAuth, getUserLeave)

//POST a new leave
router.post('/', requireAuth, createLeave)

//DELETE a new leave
router.delete('/:id', requireAuth, deleteLeave)

//UPDATE a new leave
router.patch('/:id', requireAuth, updateLeave)

module.exports = router