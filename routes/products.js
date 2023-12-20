import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
      res.render('index' , {
            title : "Boom shop ",
      })
})


router.get('/products', (req, res) => {
      res.render('products' , {
            title : "Products  shop",
            isProducts:true
      })
})

router.get('/add', (req, res) => {
      res.render('add' , {
            title : "Add product",
            isAdd : true
      })
})

export default router