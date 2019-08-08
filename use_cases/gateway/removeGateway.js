'use strict';

module.exports = (uid, { gatewayRepository }) => {
    return gatewayRepository.remove(uid);
};
