const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        });
        console.table({
            mongoDB: 'connected',
            host: conn.connection.host,
            name: conn.connection.name,
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;