const express = require("express")

const router = express.Router()


const Employees= require("../models/Employee")




// add a new Employee 

router.post('/',async (req,res)=>{
    try {
        const Employee = new Employees(req.body)

        await Employee.save()

        res.status(201).send(Employee)
    } catch (error) {

        res.status(400).send(error)
        
    }


})



// get all Employee 

router.get("/", async (req,res)=>{

    const Employee = await Employees.find()

    res.send(Employee)
})


// get Employee by id 

router.get("/:id",async(req,res)=>{
    const Employee = await Employees.findOne({EmployeeID:req.params.id})
    if(!Employee) return res.status(400).send("Employee not found ")

        res.send(Employee)
})


// update Employee information 

router.put("/:id",async (req,res)=>{
    const Employee = await Employees.findOneAndUpdate({EmployeeID:req.params.id},req.body)
    if(!Employee) return res.status(400).send("Employee not found ")
        res.send(Employee)


})

// delete Employee 

router.delete("/:id", async (req,res)=>{
    const results = await Employees.deleteOne({EmployeeID:req.params.id})

    if(results.deletedCount===0) return res.status(404).send("Employee not found")

        res.send({message:"Employee has been deleted"})

})

module.exports=router; 