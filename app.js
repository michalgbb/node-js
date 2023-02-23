const express = require('express')
const port = 3000

const generateTitle = () => {
    return 'Node Js!'
}

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    
    const title = generateTitle()
    
    res.render('index',{
        pageTitle: title,
        pageBody: 'Hello node!!!'
    })
})

app.get('/kontakt', (req, res) => {
    res.send('Dane kontaktowe')
})

app.listen(port)