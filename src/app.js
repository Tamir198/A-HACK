const express = require('express');
const hackController = require('./controllers/controller.hack');


const app = express();
const PORT = process.env.PORT || 2743;


//Tells express to parse the json data coming, into an object and be accessable via request.body
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//fire the gateaways function
hackController(app);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

