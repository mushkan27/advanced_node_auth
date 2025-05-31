require('dotenv').config({path: "./config.env"})
const express = require('express');
const connectDB = require('./config/db')

//Connect DB
connectDB()

const app = express()

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

//Global eventlistener setup for unhandled promise rejectionmeaning when a Promise in your code rejects (fails) but you didn’t catch or handle that error anywhere.
process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(()=>process.exit(1))
})