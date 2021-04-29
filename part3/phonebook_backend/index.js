const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
morgan.token('content', function (req, res) { return JSON.stringify(req.body) !== '{}'? JSON.stringify(req.body) : ''})
const post_middleware = morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens['content'] (req,res)
    ].join(' ')
  })
app.use(post_middleware)

let persons = 
[
    {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
    },
    {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
    },
    {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
    },
    {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
    }
]

const maxId = persons.length > 0
? Math.max(...persons.map(n => n.id))
: 0



app.get('/', (req, res) => {
    res.send('<h1>Hello World!!!!</h1>')
    })
    
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/info', (req,res) =>{
    res.send(
        `<p>Phone book has info for ${maxId} people.</p>
         <p>${Date()}</p>`
    )
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end('404 Not Found')
    }
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
  
    res.status(204).end()
})

const generateId = (max, min) => {
    let Id = Math.floor(Math.random() * (max - min) + min)
    while(persons.map(n => n.id).includes(Id)){
        Id = Math.floor(Math.random() * (max - min) + min)
    }
    return Id
}


app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body.name){
        return res.status(400).json({ 
        error: 'name missing' 
        })
    }else if(!body.number){
        return res.status(400).json({ 
        error: 'number missing' 
        })
    }
    else if(persons.map(n => n.name).includes(body.name)){
        return res.status(400).json({
            error: 'name has exist'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(1e10, 0)
    }
    persons = persons.concat(person)
    res.json(persons)
})


const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})