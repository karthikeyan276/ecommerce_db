const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors')
const Sequelize = require("sequelize");


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

app.post(`/Product`,(req,res)=>{

    const category = req.body.category


    
    const description=req.body.description
    const image = req.body.image
    // const price_1 = res.body.price
    console.log("asasas",req.body.price)
    const title = req.body.title
    const user_id= req.body.user_id

    console.log("body",req.body)
   
    db.query(`INSERT INTO product_details (category,description,image,price,title,user_id)VALUES(?,?,?,?,?,?)`,[category,description,image,req.body.price,title,user_id],(err,result)=>{
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
app.post(`/Product_men`,(req,res)=>{

    const category = req.body.category


    
    const description=req.body.description
    const image = req.body.image
    // const price_1 = res.body.price
    console.log("asasas",req.body.price)
    const title = req.body.title
    const user_id= req.body.user_id

    console.log("body",req.body)
   
    db.query(`INSERT INTO product_details (category,description,image,price,title,user_id)VALUES(?,?,?,?,?,?)`,[category,description,image,req.body.price,title,user_id],(err,result)=>{
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
app.post(`/Product_women`,(req,res)=>{

    const category = req.body.category


    
    const description=req.body.description
    const image = req.body.image
    // const price_1 = res.body.price
    console.log("asasas",req.body.price)
    const title = req.body.title
    const user_id= req.body.user_id
   
    db.query(`INSERT INTO product_details (category,description,image,price,title,user_id)VALUES(?,?,?,?,?,?)`,[category,description,image,req.body.price,title,user_id],(err,result)=>{
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
app.post(`/product_jwel`,(req,res)=>{

    const category = req.body.category


    
    const description=req.body.description
    const image = req.body.image
    // const price_1 = res.body.price
    console.log("asasas",req.body.price)
    const title = req.body.title
    const user_id= req.body.user_id
   
    db.query(`INSERT INTO product_details (category,description,image,price,title,user_id)VALUES(?,?,?,?,?,?)`,[category,description,image,req.body.price,title,user_id],(err,result)=>{
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


app.post(`/Orders`,(req,res)=>{

   const user_id=req.body.user_id
   console.log("userid",user_id)
   
    db.query(`SELECT *  FROM product_details inner JOIN user_regirster ON user_regirster.id=product_details.user_id WHERE user_regirster.id=${user_id}`,(err,result)=>{
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

app.post(`/userdata`,(req,res)=>{
    const user_email=req.body.user_email
    console.log("user_email",user_email)
    db.query(`select * from user_regirster where id = ${user_email}`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:'sucess',results:result})
        }
        
    })
})

app.post(`/userbynow_add`,(req,res)=>{
    const user_email=req.body.user_email
    console.log("user_email",user_email)
    db.query(`SELECT phoneNumber,address_1,address_2,country  FROM user_bynow inner JOIN user_regirster ON user_regirster.id=user_bynow.user_id WHERE user_regirster.id=1`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:'sucess',results:result})
        }
        
    })
})

app.put(`/image/:user_email`,(req,res)=>{
    const user_email = req.params.user_email
    console.log("user_emailuser_email",user_email)
    db.query(`update user_regirster set image ="C:\fakepath\image1.jpg" where id = ${user_email}`),(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send({message:'sucess',results:result})
        }
    }

})


app.post(`/details`,(req,res)=>{
    const firstName=req.body.firstName
    const lastname=req.body.lastname
    const email=req.body.email
    const phoneNumber=req.body.phoneNumber
    const address1=req.body.address1
    const address2=req.body.address2
    const title=req.body.title
    const description=req.body.description
    const image=req.body.image
    const data1=req.body.data1
    const category=req.body.category
        const price=req.body.price
    const country=req.body.country
    const user_data=req.body




    // console.log("user_email",firstName)
    db.query(`INSERT INTO user_bynow (firstName,lastName,emailAddress,phoneNumber,address_1,address_2,country,user_id,image,category,description,price,title)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,[firstName,lastname,email,phoneNumber,address1,address2,country,data1,image,category,description,price,title],(err,result)=>{
        if(err){
            console.log("hhhh",err)
        
            res.status(500).send({message:"error",errors:err})

        }else{
            res.send({message:"sucess",results:result,errors:err})
        }
        db.connect((err)=>{
            err? console.log(err): console.log("connected")
        })
     
    })
//  const user = user_data&&user_data.map(d=>d.First_name)

//  console.log("user",user)

// const values = user_data&&user_data.length>0&&user_data.map(d=>d.First_name)

// console.log("valuess",values)

// db.query(
//     'INSERT INTO user_bynow (first_name, lastName, emailAddress,phoneNumber,address1,address2,cardMonth,cardNumber) VALUES ?',
//     [user_data.map(item => [item.First_name, item.lastName, item.emailAddress,item.phoneNumber,item.address1,item.address2,item.cardMonth,item.cardNumber])],(err,result)=>{
//            if(err){
//             console.log(err)
//         }else{
//             res.send({message:'sucess',results:result})
//         }
//     }
   
// );
    // db.query(`select * from  user_regirster`,(err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.send({message:'sucess',results:result})
    //     }
        
    // })
})

app.listen(7001,()=>{
    console.log("server running port 7001")
})