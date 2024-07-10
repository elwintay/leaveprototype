require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const leaveRoutes = require('./routes/leaves')
const blockRoutes = require('./routes/blocks')

//create express app
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/leave', leaveRoutes)
app.use('/api/block', blockRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connect to db & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {console.log(error)})

