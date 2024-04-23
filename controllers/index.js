const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")

const userRoutes = require("./userController")
router.use("/api/users",userRoutes)

//protecc
router.get("/protected",(req,res)=>{
    console.log(req.headers)
    const token = req.headers?.authorization?.split(" ")[1]
    console.log('==============================')
    console.log(token)
    try {
        const tokenDecoded = jwt.verify(token,"secret");
        res.json({msg:"welcome to the club!",tokenDecoded})
    } catch (error) {
        res.status(403).json({msg:"invalid token"})
    }
})

module.exports = router;