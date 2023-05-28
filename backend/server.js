const express = require ('express');
const dotenv = require('dotenv').config();
const mongoose = require ('mongoose');
const colors = require ('colors');
const TodoRouter = require ('./routes/todoRoutes')
const { urlencoded } = require('express');
const port= process.env.PORT|| 7000
// set up my app
 const app= express();
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))
 app.use('/api/todos',TodoRouter)
 // run my sever 
 app.listen(port, ()=>{
    console.log(`server running on ${port}`)
 })