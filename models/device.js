'use strict';

module.exports = class {

    constructor(uid, vendor, status, dateCreated, gateway) {
        this.uid = uid;
        this.vendor = vendor;
        this.status = status;
        this.dateCreated = dateCreated;
        this.gateway = gateway;
    }

};