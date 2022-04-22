let express = require('express');
let mongoose = require('mongoose')
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const routes = require("./routes/index");
app.use("/api", routes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://rubik09:12345@cluster0.ixpj2.mongodb.net/Users')
        app.listen(process.env.PORT, () => console.log('Server started'));
    } catch (err) {
        console.log(err);
    }
}

start();
