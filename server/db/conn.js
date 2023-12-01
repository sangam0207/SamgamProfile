const mongoose=require('mongoose');
mongoose.connect(process.env.CONNECTION)
.then(()=>{
    console.log('connection is successful')
})
.catch(()=>{
    console.log('Connection Failed')
})
