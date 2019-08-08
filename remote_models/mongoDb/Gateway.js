const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gatewaySchema = new Schema({
        uid: {type:String, unique : true,required: true},
        name: {type:String, required: true},
        ipv4: {type: String, unique : true, required: true}
    },
    {
        timestamps: true
    },
    {
        toJSON: { virtuals: true }
    });
    gatewaySchema.virtual('devices', {
        ref: 'Device',
        localField: 'uid',
        foreignField: 'gateway',
        justOne: false
    });

module.exports = mongoose.model('Gateway', gatewaySchema);