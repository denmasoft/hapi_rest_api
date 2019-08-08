'use strict';

module.exports = (uid, { deviceRepository }) => {
    return deviceRepository.readGateway(uid);
};
