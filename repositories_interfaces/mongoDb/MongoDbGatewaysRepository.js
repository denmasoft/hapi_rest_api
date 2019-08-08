'use strict';

const Gateway = require('../../remote_models/mongoDb/Gateway');
const Device = require('../../remote_models/mongoDb/Device');
const uniqid = require('uniqid');
module.exports = class {

    constructor() {
    }

    async persist(gatewayModel) {
        const {name, ipv4 } = gatewayModel;
        const gateway = new Gateway({uid: uniqid(), name: name,ipv4: ipv4});

        try {
            return await gateway.save();
        }catch (e) {
            throw e;
        }
    }

    async update(gatewayModel) {
        try {
            return await Gateway.findOneAndUpdate({uid: gatewayModel.uid}, gatewayModel, {new: true});
        }catch (e) {
            throw e;
        }
    }

    async remove(uid) {
        try {
            return await Gateway.findOneAndRemove({uid: uid});
        }catch (e) {
            throw e;
        }
    }

    async find(uid) {
        try {
            return await Gateway.findOne({uid:uid});
        }catch (e) {
            throw e;
        }
    }

    async findAll() {
        try{
            let gateways;
            gateways = await Gateway.find();
            return gateways;
        } catch (e) {
            throw e;
        }
    }

    async addDevices(uid, data) {
        try {
            let gateway = await Gateway.findOne({uid:uid}).populate('devices');
            const device = new Device({uid: data.uid, vendor: data.vendor,status: data.status, dateCreated: data.dateCreated, gateway: uid});
            let deviceCreated = await device.save();
            gateway.devices.push(deviceCreated);
            return deviceCreated;
        }catch (e) {
            console.log(e.message);
            throw e;
        }
    }

    async readDevices(uid) {
        try {
            let gateway = await Gateway.findOne({uid:uid}).populate('devices');
            return gateway.devices;
        }catch (e) {
            console.log(e.message);
            throw e;
        }
    }
};