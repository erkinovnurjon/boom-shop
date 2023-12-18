import express from "express"

const app = express()
const PORT = process.env.PORT  || 4100

app.listen(4100 , () => console.log(`Server is running on port : ${PORT}`))