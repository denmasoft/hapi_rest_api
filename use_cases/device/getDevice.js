'use strict';

module.exports = (uid, { deviceRepository }) => {
    return deviceRepository.find(uid);
};
