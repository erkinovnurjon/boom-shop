import { Router } from "express";
import User from "../models/user.js";

const router = Router()

router.get('/login', (req, res) => {
      res.render('login' , {
            title : "Login ",
            isLogin : true
      })
})

router.get('/register', (req, res) => {
      res.render('register' , {
            title : "Register ",
            isRegister : true
      })
})

router.post('/register' , async (req , res) => {
      
      const userData = {
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email ,
            password : req.body.password
      }
      
      const user = await User.create(userData)
      console.log(user);
      res.redirect('/')
})

router.post('/login' , (req , res) => {
      console.log(req.body)
      res.redirect('/')
})


export default router