const express=require('express')
const app=express()
app.use(express.json())
const PORT=5000
const router=require('./config/routes')
const db=require('./config/database')


//Test the DB Connection
db.authenticate()
.then(()=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log(err)
})

//Root file
app.get('/',(req,res)=>{
    res.send('Hi welcome to Sequilize')
})

//USING Routes
app.use('/',router)

app.listen(PORT,()=>{
    console.log('Listening on port',PORT)
})