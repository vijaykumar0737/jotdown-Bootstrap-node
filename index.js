const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { post } = require('./routes/post');
const { customer } = require('./routes/customer');

const app = express();
app.use(cors())

mongoose.connect('mongodb+srv://vijay:vijay@mongocluster-bjhe8.mongodb.net/jotdownBootstrap?retryWrites=true')
    .then(() => { console.log('Connected to MongoDB'); })
    .catch((e) => { console.log(e) });

app.use(express.json());
app.use('/api/post', post);
app.use('/api/customer', customer);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});