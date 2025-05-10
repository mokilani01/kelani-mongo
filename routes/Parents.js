const express = require("express")

const router = express.Router()

const parent = require("../models/parents")




// add a new parents 

router.post('/',async (req,res)=>{
    try {
        const parents = new parent(req.body)

        await parents.save()

        res.status(201).send(parents)
    } catch (error) {

        res.status(400).send(error)
        
    }


})



// get all parents 

router.get("/", async (req,res)=>{

    const parentss = await parent.find()

    res.send(parentss)
})


// update parents information 

router.put("/:id",async (req,res)=>{
    const parents = await parent.findOneAndUpdate({parentsID:req.params.id},req.body)
    if(!parents) return res.status(400).send("parents not found ")
        res.send(parents)


})

// delete parents 

router.delete("/:id", async (req,res)=>{
    const results = await parent.deleteOne({parentsID:req.params.id})

    if(results.deletedCount===0) return res.status(404).send("parents not found")

        res.send({message:"parents has been deleted"})

})

module.exports=router; 