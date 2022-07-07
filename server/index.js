const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors')


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"e_commerce"
})
app.post(`/user_login`,(req,res)=>{

    const Email=req.body.email;

    console.log(req.body)
    const Password = req.body.password;
    const First_name=req.body.First_name;
    const Last_name=req.body.Last_name
    db.query(`INSERT INTO user_regirster (First_name,Last_name,Email,Password)VALUES(?,?,?,?)`,[First_name,Last_name,Email,Password],(err,result)=>{
        if(err){
            console.log("hhhh",err)
        
            res.status(500).send({message:"error",errors:err})

        }else{
            res.send({message:"sucess",results:result,errors:err})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})
app.post(`/user`,(req,res)=>{

    const Email=req.body.Email
    const Password = req.body.Password
    db.query(`select First_name,Last_name,Email,id from user_regirster where Email="${Email}" && password="${Password}"`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:"sucess",results:result})
        }
    })
    db.connect((err)=>{
        err? console.log(err): console.log("connected")
    })
 
})






app.listen(7001,()=>{
    console.log("server running port 7001")
})