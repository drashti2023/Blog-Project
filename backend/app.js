const express = require("express");
const mongoose = require("mongoose");
const postsRoutes = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/posts', postsRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://23010101226:dRathod23@blogcluster.1or6y.mongodb.net/")
    .then(() => {
        app.listen(3000, () => {
            console.log("Server start");
        });
    });

