const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to auth API'
    })
})

app.post('/api/login', (req, res) => {
    // mock user
    const user = {
        id: 1,
        username: 'dev',
        email: 'stdevelopr@gmail.com'
    }

    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({ token })
    })
})

app.listen(5000, () => console.log('server started on port 5000'))