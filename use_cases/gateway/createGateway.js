'use strict';

const GatewayModel = require('../../models/gateway');

module.exports = (uid, name, ipv4, { gatewayRepository }) => {
    const gateway = new GatewayModel(uid, name, ipv4);
    return gatewayRepository.persist(gateway);
};
