const express = require('express')

const app = express();

app.get('/server', (req, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello AJAX!')
})

app.listen(8000, () => {
    console.log("server running, listening to port 8000")
})