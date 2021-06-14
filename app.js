const express=require('express')
const data=require('./data')
const app=express()
const port=process.env.PORT || 3000
app.get('/absentDays/',async(req,res)=>{
    try 
    {
        res.send(Userdata.absentdays)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/absentDetails/',async(req,res)=>{
    try 
    {
        res.send(Userdata.absentdetails)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/leaveBalance/',async(req,res)=>{
    try 
    {
        res.send(Userdata.leaveBalance)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.get('/holidayCalendar/',async(req,res)=>{
    try 
    {
        res.send(Userdata.holidaycalendar)
    }
    catch(e)
    {
        res.status(500).send()
    }
})
app.listen(port,()=>{
    console.log("Server is up running "+port)
})