const express = require ('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')
const app = express()

let name = 'tony'
let password = 12345678

//http methods get, post, put, delete

//app.get(route, callback(req, res))
app.get('/', (req, res)=>{
    res.write('<h1>I am the Logging Page</h1>')
    res.write('<h2>I am the Logging Page2</h2>')
    res.send()
    
})//Login Page
app.use(loginMiddleware)
app.get('/profilepage', (req, res)=>{
    res.json([{
        firstname : 'Tony',
        lastname : 'Stark'
    },
    {
        firstname : 'Steve',
        lastname : 'Jobs'
    },
    {
        firstname : 'Leonardo',
        lastname : 'Depacrio'
    }])
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

