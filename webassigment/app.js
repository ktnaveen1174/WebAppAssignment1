const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

const projects = [
    {title: 'Voice controlled Car Automation', body: 'The car takes the voice command of the user like go, stop, left, right and moves accordingly.' },
    {title: 'Feature Extraction and Pattern Recognition in Parking System', body: 'The camera captures the image of entire car and detects where the number plate is and takes only the number plate. Then using optical character recognition it converts image to text and thats into MS Access for further process.' },
]

const user = {
    firstName: 'Naveen',
    lastName: 'Kanmani Thirunavukkarasu',
    admin: true
}


app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})

app.get('/article', (req, res) => {
    res.render('pages/article', {
        article: posts
    })
})

app.get('/aboutme', (req, res) => {
    res.render('pages/aboutme', {

    })
})

app.get('/projects', (req, res) => {
    res.render('pages/projects', {
        projects: projects
    })
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})