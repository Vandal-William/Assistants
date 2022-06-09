const express = require('express');

const app = express(); 
const port = 3333;


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./'));


app.get('/', (req, res) => {

    res.render('index');
});

app.listen(port);