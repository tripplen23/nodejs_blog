const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Error connecting!!!');
    }
}

module.exports = { connect };
