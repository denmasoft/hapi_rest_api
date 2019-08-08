'use strict';

module.exports = (uid, { deviceRepository }) => {
    return deviceRepository.remove(uid);
};
