'use strict';

const DeviceModel = require('../../models/device');

module.exports = (uid, vendor, dateCreated, status, gateway, { deviceRepository }) => {
    const device = new DeviceModel(uid, vendor, dateCreated, status, gateway);
    return deviceRepository.persist(device);
};
