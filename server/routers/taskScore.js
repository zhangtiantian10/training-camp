const express=require("express");
const router=express.Router();
const taskScore=require('../dbs/taskScore');

router.post('/selectTaskcard',(req,res)=>{

});

router.post('/getAllTask',(req,res)=>{
    taskScore.selectAllTaskcard(res)
});

module.exports=router;