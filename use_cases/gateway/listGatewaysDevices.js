'use strict';

module.exports = (uid, { gatewayRepository }) => {
    return gatewayRepository.readDevices(uid);
};
