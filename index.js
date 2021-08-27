
const express=require('express')
const app=express()

const cors=require('cors')
const bodyParser = require('body-parser');
const authRoutes=require('./routes/auth')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/auths',authRoutes)
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}
const PORT=5000
app.listen(PORT,()=>console.log('Server started on port 5000')) 