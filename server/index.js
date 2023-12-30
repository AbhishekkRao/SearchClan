const express = require('express');
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobslist');
const instituteNames = require('./routes/institutenames');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());


const apiURL = "https://axisapi.onrender.com/";

getContent = async (url) => {
    console.log(url);
    // const response = await fetch(apiURL + url, {
    //     method: 'GET'
    // });
    const formattedResponse = await response.json();
    return formattedResponse;
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/getContent', async (req, res) => {
    const { url } = req.body;
    try {
        const content = await getContent(url);
        return content.json();
    } catch (error) {
        console.error('Error getting content', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log('App is running on port ' + port);
});
