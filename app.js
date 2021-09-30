const express = require('express');

const startContent = 'welcome to nmit'
const aboutContent = 'This is the taster course'

const app = express();

app.get('/', (req, res) => {
    res.render('home', {
    startContenet: startContent
    })
})

app.get('/about', (req, res) => {
res.render('about', {
    aboutContent: aboutContent
})
})