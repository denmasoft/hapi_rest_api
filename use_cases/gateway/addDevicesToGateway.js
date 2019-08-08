'use strict';

module.exports = (uid, data, { gatewayRepository }) => {
    console.log(uid);
    console.log(data);
    console.log("USECASE");
    return gatewayRepository.addDevices(uid, data);
};
