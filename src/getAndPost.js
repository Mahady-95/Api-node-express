const express = require('express')
const app = express()

const PORT = 8000
app.use(express.json())

const movielist = [
    {
        id: 1,
        name: 'Die Hard'
    },
    {
        id: 2,
        name: 'Transformer'
    },
    {
        id: 3,
        name: 'Terminator'
    }
]

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/movies', (req, res) => {
    res.send(movielist)
})
app.get('/movies/:name', (req, res) => {
    const { name } = req.params
    const movie = movielist.find((m) => m.name === name)
    res.send(movie)
})

app.post('/movies', (req, res)=>{
    console.log(req.body)
    movielist.push(req.body)
    res.sendStatus(201)
})