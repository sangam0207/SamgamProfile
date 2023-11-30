const express=require('express');
const cors=require('cors');
require('./db/conn');
const router=require('./routes/router')
const dotenv=require('dotenv')
dotenv.config()
const port=8007;
const app=express();
 app.use(cors());
 app.use(express.json());
 app.use(router);
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`)
})


