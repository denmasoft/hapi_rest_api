'use strict';

const DeviceModel = require('../../models/device');

module.exports = (uid, data, { deviceRepository }) => {
    data.uid = uid;
    return deviceRepository.update(data);
};
