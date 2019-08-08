'use strict';

const GatewayModel = require('../../models/gateway');

module.exports = (uid, data, { gatewayRepository }) => {
    data.uid = uid;
    return gatewayRepository.update(data);
};
