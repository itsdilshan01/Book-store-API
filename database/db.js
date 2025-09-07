const mongoose = require('mongoose');

const connectToDb = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://vimukthidilshan574_db_user:kStNRVAs9tJOcNUS@cluster0.kuh1qih.mongodb.net/');
        console.log('Database connected successfuly');
    } catch (error) {
        console.log('Cannot connect with Database ', error)
        process.exit(1);  //this exit when failling connection once!
    }
}

module.exports = connectToDb;
//kStNRVAs9tJOcNUS vimukthidilshan574_db_user