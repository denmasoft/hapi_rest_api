'use strict';

const ListDevices = require('../use_cases/device/listDevices');
const CreateDevice = require('../use_cases/device/createDevice');
const GetDevice = require('../use_cases/device/getDevice');
const UpdateDevice = require('../use_cases/device/updateDevice');
const DeleteDevice = require('../use_cases/device/removeDevice');
const GetDeviceGateway = require('../use_cases/device/getDeviceGateway');
const DeviceRepository = require('../repositories/DeviceRepository');

const MongoDbDevicesRepository = require('../repositories_interfaces/mongoDb/MongoDbDevicesRepository');
const deviceRepository = new DeviceRepository(new MongoDbDevicesRepository());

module.exports = {

    async createDevice(data) {
        const { uid, vendor, status, dateCreated, gateway } = data;
        let device;
        try {
            device = await CreateDevice(uid, vendor, status, dateCreated, gateway, { deviceRepository });
            return device;
        }catch (e) {
            throw e;
        }
    },

    async findDevices() {
        try {
            const devices = await ListDevices({ deviceRepository });
            return devices;
        }catch (e) {
            throw e;
        }
    },

    async getDevice(uid) {

        const device = await GetDevice(uid, { deviceRepository });
        if (!device) {
            return null;
        }
        return device;
    },

    async deleteDevice(uid) {
        return await DeleteDevice(uid, { deviceRepository });
    },
    async updateDevice(uid, data) {

        const device = await UpdateDevice(uid, data, { deviceRepository });
        if (!device) {
            return null;
        }
        return device;
    },

    async readGateway(uid) {
        try {
            const gateway = await GetDeviceGateway(uid, { deviceRepository });
            return gateway;
        }catch (e) {
            throw e;
        }
    },

};
