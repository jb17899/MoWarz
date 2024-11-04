import express from "express";
import cors from 'cors';
import supabase from "./db_config.js";
import {find} from "./supabase.js";
import auths from "./auth.js";



const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
const mapLinks = new Map();
app.get("/getMovieData",(req,res)=>{
    const data = mapLinks.get('present');
    console.log(data);
    res.send({
        link:data        
    });
})
app.post("/auth",async(req,res)=>{
    console.log(req.query);
    auths(req.query.email,req.query.password);
    res.send(201);
})
app.post("/api/stuff",async(req,res)=>{
    console.log(req.query);
    console.log(req.query.requestFor);
    const data = await find(req.query.requestFor);
    mapLinks.set('present',data[0].link);
    res.sendStatus(201);
})
app.post("/api/recData",(req,res)=>{
    console.log(req);
    res.sendStatus(201);
})
app.listen(3001,(err)=>{
    console.log("server running on port 3000");
})