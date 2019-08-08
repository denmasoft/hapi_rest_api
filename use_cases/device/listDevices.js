'use strict';

module.exports = ({ deviceRepository }) => {
    try {
        return deviceRepository.findAll();
    }catch (e) {
        throw e;
    }
};
