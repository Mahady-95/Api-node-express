const express = require ('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')
const app = express()

let name = 'tony'
let password = 1234567

//http methods get, post, put, delete

//app.get(route, callback(req, res))
app.get('/', (req, res)=>{
    res.send('Login to move forward')
})//Login Page
app.use(loginMiddleware)
app.get('/profilepage', (req, res)=>{
    res.send('Profile Page')
})
app.get('/feedpage', (req, res)=>{
    res.send('Home/Feed Page')
})

app.listen(8000, ()=>{
    console.log('Port running on 8000')
})
function loginMiddleware(req, res, next){
    console.log('I am the login middleware!!')
    if(name == 'tony' && password == 12345678){
        next()
    }
    else{
        res.send('Can not Authenticate user')
    }
}

