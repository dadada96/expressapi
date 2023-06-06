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

    // request('https://jsonplaceholder.typicode.com/posts', function(error, response, body) {
    //     console.log(body)
    //     res.status(200).send(body)
    // })

    // var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://login.meteomatics.com/api/v1/token',
        'headers': {
            'Authorization': 'Basic YWVyb2R5bmVncm91cF9kZXY6djlyNVN0SkI5Mg=='
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

})

module.exports = app;