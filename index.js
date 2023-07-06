const express = require('express')
const app = express()
const port = 4002

app.get('/', (req, res) => {
    res.send('Bidding App is running')
})

app.listen(port, () => {
    console.log(`Bidding App listening on port ${port}`)
})