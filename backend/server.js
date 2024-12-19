

import 'dotenv/config' // To read CLERK_SECRET_KEY and CLERK_PUBLISHABLE_KEY
import express from 'express'
import { ClerkExpressRequireAuth, ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'
import cors from 'cors'
import mongoose from 'mongoose'
import disRouter  from './route/disastercity.route.js'
import reportRouter from './route/report.route.js'
const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/dis',disRouter)
app.use('/api/rep',reportRouter)
// Use the strict middleware that throws when unauthenticated
app.get('/protected-auth-required', ClerkExpressRequireAuth(), (req, res) => {
  console.log(req.auth)
  res.json(req.auth)
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected")
}).catch(err => console.log(err))

app.get('/protected-auth-optional', ClerkExpressWithAuth(), (req, res) => {
  console.log(req.auth)

  res.json(req.auth)
})


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