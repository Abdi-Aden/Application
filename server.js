const express = require("express");
const path = require('path'); //a node native module
const {Restaurant} = require('./models/index');

const app = express();
const port = 3000;

//Q: What does express.static help us do?
//Anwer: makes non static page acceable
//Q: What do you think path.join helps us do?
//Anser: it make public directory accessable
app.use(express.static(path.join(__dirname, 'public')))

//will add routes

//will add routes


//Q: What will our server be doing?

// logs line 23 when there is a successful connection
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
