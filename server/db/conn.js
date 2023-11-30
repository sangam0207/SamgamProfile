const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolio')
.then(()=>{
    console.log('connection is successful')
})
.catch(()=>{
    console.log('Connection Failed')
})