const app = require('express')();
const PORT = 2000;

const request = require('request')

app.listen(
    PORT,
    () => console.log(`its live on port ${PORT} !!!`)
)

app.get('/users', (req, res) => {
    // res.status(200).send({
    //     name: 'ahmad',
    //     age: '27'
    // })

    request('https://jsonplaceholder.typicode.com/posts', function(error, response, body) {
        console.log(body)
        res.status(200).send(body)
    })
})

module.exports = app;