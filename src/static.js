const express = require ('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')
const app = express()

const path = require('path')
const staticPath = path.join(__dirname, '../public')
console.log(staticPath)

app.use(express.static(staticPath))
//http methods get, post, put, delete

//app.get(route, callback(req, res))
app.get('/', (req, res)=>{
    res.send('Login to move forward')
})//Login Page
app.get('/profilepage', (req, res)=>{
    res.send('Profile Page')
})
app.get('/feedpage', (req, res)=>{
    res.send('Home/Feed Page')
})

app.listen(8000, ()=>{
    console.log('Port running on 8000')
})

