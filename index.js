import express from "express"
import path , {dirname} from "path"
import {fileURLToPath} from "url"
import {engine} from "express-handlebars"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.engine('handlebars' , engine())
app.set('view engine' , 'handlebars')
app.set('views' , './views')

app.get('/' , (req, res) => {
      res.render('index')
})

app.get('/about' , (req, res) => {
      res.render('about')
})



const PORT = process.env.PORT  || 4100
app.listen(4100 , () => console.log(`Server is running on port : ${PORT}`))