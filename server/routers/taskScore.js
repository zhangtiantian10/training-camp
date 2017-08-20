const express=require("express");
const router=express.Router();
const taskScore=require('../dbs/taskScore');

router.post('/selectTaskcard',(req,res)=>{
    console.log(req.body.data);
});

module.exports=router;