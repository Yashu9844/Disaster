<<<<<<< HEAD
const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
=======
import 'dotenv/config' // To read CLERK_SECRET_KEY and CLERK_PUBLISHABLE_KEY
import express from 'express'
import { ClerkExpressRequireAuth, ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'
import cors from 'cors'
>>>>>>> a8a96c6de90de7d2eeec78b08e8e4249af38cf86

const port = process.env.PORT || 3000

const app = express()
app.use(cors())

// Use the strict middleware that throws when unauthenticated
app.get('/protected-auth-required', ClerkExpressRequireAuth(), (req, res) => {
  console.log(req.auth)
  res.json(req.auth)
})

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected")
}).catch(err => console.log(err))
=======
// Use the lax middleware that returns an empty auth object when unauthenticated
app.get('/protected-auth-optional', ClerkExpressWithAuth(), (req, res) => {
  console.log(req.auth)

  res.json(req.auth)
})
>>>>>>> a8a96c6de90de7d2eeec78b08e8e4249af38cf86

// Error handling middleware function
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

// Route not utilizing any authentication
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})