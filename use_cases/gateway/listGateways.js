'use strict';

module.exports = ({ gatewayRepository }) => {
    return gatewayRepository.findAll();
};
