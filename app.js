const express = require('express');
const app = express();
var serveIndex = require('serve-index');

app.use(express.static('public'))
app.use('/public', serveIndex(__dirname + '/public'));

app.listen(3000,(req,res)=>{

    console.log("server is listening on port 3000")
})