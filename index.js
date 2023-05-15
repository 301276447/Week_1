//const http = require('http');
// let a= ()=> {...
//}

//http.createServer((req,res)=>{
//res.write('<h1>Hii there,how are U? </h1>');
//res.end();

//}).listen(1234);

//imports
const express = require('express');
const morgan = require('morgan');

//app init
const app = express();

//first route
app.get('/',(req,res)=>{

    res.json({message: "Wellcome to the page"})
})

app.listen('1234');
