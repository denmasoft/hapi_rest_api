const deviceCtrl = require('../../controllers/deviceCtrl');
const factory = {
    create: async function(data) {
        try {
            const device = await deviceCtrl.createDevice(data);
            return device;
        }catch (e) {
            throw e;
        }

    },
    readAll: async function() {
        try {
            const devices = await deviceCtrl.findDevices();
            return devices;
        }catch (e) {
            throw e;
        }
    },
    readOne: async function(params) {
        try {
            const device = await deviceCtrl.getDevice(params.uid);
            return device;
        }catch (e) {
            throw e;
        }
    },
    update: async function(params, data) {
        try {
            const device = await deviceCtrl.updateDevice(params.uid, data);
            return device;
        }catch (e) {
            throw e;
        }
    },
    delete: async function(params) {
        try {
            const device = await deviceCtrl.deleteDevice(params.uid);
            return device;
        }catch (e) {
            throw e;
        }
    },
    readGateway: async function(params) {
        try {
            const gateway = await deviceCtrl.readGateway(params.uid);
            return gateway;
        }catch (e) {
            throw e;
        }
    },
};
module.exports = factory;