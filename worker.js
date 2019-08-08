const SCWorker = require('socketcluster/scworker');
const mongoose = require('mongoose');
const config = require('./config');
const { app } = require('./app');
class Worker extends SCWorker {
    async run() {
        console.log('   >> Worker PID:', process.pid);
        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        mongoose.connect(config.mongodbUrl, {
            useNewUrlParser: true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
        await app.start();
    }
}
new Worker();