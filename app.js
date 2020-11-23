const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000,(req,res)=>{

    console.log("server is listening on port 3000")
})