import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'
import videolist from './dbmodel.js'

//app config
const app=express();
const port= process.env.PORT ||9000;
//middlewares
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeaders("Access-Control-Allow-Origin","*");
    res.setHeaders("Access-Control-Allow-Headers","*");
    next();
});

//dbconfig
const connectionrul="mongodb+srv://Himanshu:Newton@2@cluster0.8qfeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionrul,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

//api endpoint
app.get('/',(req,res)=>{res.status(200).send("hi")});
app.get('/items/videos',(req,res)=>{res.status(200).send(data)});
app.get('/items/postvideo',(req,res)=>{
    videolist.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
app.post('/items/postvideo',(req,res)=>{
    const dbvideos=req.body
    videolist.create(dbvideos,(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})


//listener
app.listen(port ,()=>console.log(`listening on local host${port}`));