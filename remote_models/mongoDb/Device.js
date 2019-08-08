const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
        uid: {type:String, unique : true, required: true},
        vendor: {type:String, required: true},
        description: String,
        gateway: {type: String,required: true},
        status: Boolean,
        dateCreated: Date
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Device', deviceSchema);