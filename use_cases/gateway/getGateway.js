'use strict';

module.exports = (uid, { gatewayRepository }) => {
    return gatewayRepository.find(uid);
};
