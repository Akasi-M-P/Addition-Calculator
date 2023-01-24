const express = require('express')
const bodyParser = require('body-parser')
const port = 4000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    
    res.send('The final results is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

