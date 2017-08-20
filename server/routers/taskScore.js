const express=require("express");
const router=express.Router();

router.post('/selectTaskcard',(req,res)=>{
    console.log(req.body.data);
});

module.exports=router;