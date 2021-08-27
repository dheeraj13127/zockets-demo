const express=require('express')
const router=express.Router()
const mysql=require('mysql2')
const nodemailer=require('nodemailer')
const sendgridTransport=require('nodemailer-sendgrid-transport')
let otpCode
let userEmail
const db=mysql.createPool({
  host:"localhost",
  user:"root", 
  password:"password",
  database:"zocket_emails"
 })
 const transporter=nodemailer.createTransport(sendgridTransport({
     auth:{
         api_key:"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"
     }
 }))

 router.post('/earlyAccess',(req,res)=>{

     const {email}=req.body
     userEmail=email
  
     otpCode=Math.floor((Math.random()*10000)+1)
     transporter.sendMail({
        from: 'dheerajkumar13127@gmail.com',
        to: email,
        subject: 'Zockets',
        text: `Your verification code is ${otpCode}`
    } 
    ).then(resp=>res.status(200).json({resp}))
  
 })
 router.post('/verifyCode',(req,res)=>{
      const {code}=req.body
      
      if(parseInt(code)===otpCode){
        db.query("INSERT INTO zocket_users (email) values (?)",[userEmail],(err,result)=>{
          if(err){
          res.status(400).json({err})
          } 
          else{
            res.status(200).json({message:"Successfully registered"})
          }
        })
      }
      else{
        res.status(400).json({message:"Invalid code !"})
      }
 })

 









 module.exports=router