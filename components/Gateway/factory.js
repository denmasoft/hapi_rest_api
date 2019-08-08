const gatewayCtrl = require('../../controllers/gatewayCtrl');
const factory = {
    create: async function(data) {
        try {
            const gateway = await gatewayCtrl.createGateway(data);
            return gateway;
        }catch (e) {
            throw e;
        }

    },
    readAll: async function() {
        try {
            const gateways = await gatewayCtrl.findGateways();
            return gateways;
        }catch (e) {
            throw e;
        }
    },
    readOne: async function(params) {
        try {
            const gateway = await gatewayCtrl.getGateway(params.uid);
            return gateway;
        }catch (e) {
            throw e;
        }
    },
    update: async function(params, data) {
        try {
            const gateway = await gatewayCtrl.updateGateway(params.uid, data);
            return gateway;
        }catch (e) {
            throw e;
        }
    }
    ,
    delete: async function(params) {
        try {
            const gateway = await gatewayCtrl.deleteGateway(params.uid);
            return gateway;
        }catch (e) {
            throw e;
        }
    },
    readDevices: async function(params) {
        try {
            const devices = await gatewayCtrl.readDevices(params.uid);
            return devices;
        }catch (e) {
            throw e;
        }
    },
    addDevices: async function(params, data) {
        try {
            const devices = await gatewayCtrl.addDevices(params.uid, data);
            return devices;
        }catch (e) {
            throw e;
        }
    }
};
module.exports = factory;