require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const leaveRoutes = require('./routes/leaves')
// const blockRoutes = require('./routes/blocks')
const userRoutes = require('./routes/users')
const cookieParser = require('cookie-parser');


//create express app
const app = express()
// app.options('*', cors());
app.use(cors({origin: 'https://leaveease-frontend-dev.vercel.app', methods: ["GET", "POST", "DELETE"], credentials: true}))
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cookieParser());

//routes
app.use('/api/leave', leaveRoutes)
// app.use('/api/block', blockRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connect to db & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {console.log(error)})

// Export the app
module.exports = app;
