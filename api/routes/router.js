const express=require("express")
const app=express()

// controllers
const login=require("../controllers/forms/Login")
const users = require("../controllers/userController")
const projects = require("../controllers/projectController")
const members = require("../controllers/memberController")

// routes
app.use("/login",login)
app.use("/users", users)
app.use("/projects", projects)
app.use("/members", members)

app.use((req,res,next)=>{
    const response = {
        message: "Page not found",
        status: 404
    }
    res.status(404).json(response)
})

// Exporting the app
// eslint-disable-next-line no-undef
module.exports=app