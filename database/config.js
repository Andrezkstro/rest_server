const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('dbConnection Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to dbConnection')
    }
}

module.exports = {
    dbConnection
}
