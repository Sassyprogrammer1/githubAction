const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.listen(3000,(req,res)=>{

    console.log("server is listening on port 3000")
})