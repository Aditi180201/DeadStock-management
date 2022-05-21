import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Product from "./models/products.js"


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions))

mongoose.connect("mongodb+srv://aditi:aditi@myloginregisterdb.iogve.mongodb.net/LoginRegisterDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === "" || email === "" ){
                res.send({message: "Please fill in the credentials"})
            }
            else if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } 
            else {
                res.send({ message: "Password didn't match"})
            }
        } 
        else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.post("/newproduct", (req, res, next)=>{
    //const { image, name, quantity, cost, condition, date} = req.body;
    Product.create(req.body, (error, data)=>{
        if (error) {
            return next(error)
          } else {
            console.log(data)
            res.json(data)
          }
    })
})

app.get('/getproducts', async (req,res, next) => {
    Product.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})

app.delete('/deleteproduct/:id', async(req,res, next)=>{
    Product.findByIdAndRemove(req.params.id, (error, data)=>{
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
          }
    })
})

app.put('/updateproduct/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('record updated successfully !')
      }
    })
  })

app.listen(5000,() => {
    console.log("BE started at port 5000")
})