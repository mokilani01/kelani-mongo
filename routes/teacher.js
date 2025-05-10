const express = require("express")

const router = express.Router()

const teacherr = require("../models/teacher")




// add a new teacher 

router.post('/',async (req,res)=>{
    try {
        const teacher = new teacherr (req.body)

        await teacher.save()

        res.status(201).send(teacher)
    } catch (error) {

        res.status(400).send(error)
        
    }


})



// get all teacher 

router.get("/", async (req,res)=>{

    const teachers = await teacherr .find()

    res.send(teachers)
})


// get teacher by id 

router.get("/:id",async(req,res)=>{
    const teacher = await teacherr .findOne({teacherID:req.params.id})
    if(!teacher) return res.status(400).send("author not found ")

        res.send(teacher)
})


// update teacher information 

router.put("/:id",async (req,res)=>{
    const teacher = await teacherr .findOneAndUpdate({teacherID:req.params.id},req.body)
    if(!teacher) return res.status(400).send("teacher not found ")
        res.send(teacher)


})

// delete teacher 

router.delete("/:id", async (req,res)=>{
    const results = await teacherr .deleteOne({teacherID:req.params.id})

    if(results.deletedCount===0) return res.status(404).send("teacher not found")

        res.send({message:"teacher has been deleted"})

})

module.exports=router; 