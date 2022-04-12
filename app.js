const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    res.sendFile('public/about.html', { root: __dirname })
})
app.get('/bookings', (req, res) => {
    res.sendFile('public/bookings.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    res.sendFile('public/contact.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})