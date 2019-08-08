'use strict';

const Device = require('../../remote_models/mongoDb/Device');
const Gateway = require('../../remote_models/mongoDb/Gateway');

module.exports = class {

    constructor() {
    }

    async persist(deviceModel) {
        const {vendor, status, dateCreated,gateway } = deviceModel;
        const device = new Device({uid: Math.floor(Date.now() / 1000), vendor: vendor,status: status, dateCreated: dateCreated, gateway: gateway});
        try {
            let count = await Device.count({gateway: gateway});
            if(count < 10){
                let deviceEntity = await device.save();
                return deviceEntity;
            }
            return Error("No more than 10 devices per gateway.");
        }catch (e) {
            throw e;
        }
    }

    async update(deviceModel) {
        try {
            let device = await Device.findOneAndUpdate({uid: deviceModel.uid}, deviceModel, {new: true});
           return device;
        }catch (e) {
            throw e;
        }
    }

    async remove(uid) {
        try {
            return await Device.findOneAndRemove({uid: uid});
        }catch (e) {
            throw e;
        }
    }

    async find(uid) {
        try {
            let device = await Device.findOne({uid:uid});
            return device;
        }catch (e) {
            throw e;
        }
    }

    async findAll() {
        try{
            let devices;
            devices = await Device.find();
            return devices;
        } catch (e) {
            throw e;
        }
    }
    async readGateway(uid) {
        try {
            let device = await Device.findOne({uid:uid});
            return await Gateway.findOne({uid:device.gateway});
        }catch (e) {
            console.log(e.message);
            throw e;
        }
    }

};