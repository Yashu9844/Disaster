const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected")
}).catch(err => console.log(err))



app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
