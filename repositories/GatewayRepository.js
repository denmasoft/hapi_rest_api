'use strict';

module.exports = class {

    constructor(repository) {
        this.repository = repository;
    }

    persist(gatewayModel) {
        return this.repository.persist(gatewayModel);
    }

    update(gatewayModel) {
        return this.repository.update(gatewayModel);
    }

    remove(uid) {
        return this.repository.remove(uid);
    }

    find(uid) {
        return this.repository.find(uid);
    }

    findAll() {
        return this.repository.findAll();
    }
    addDevices(uid, data){
        return this.repository.addDevices(uid, data);
    }

    readDevices(uid){
        return this.repository.readDevices(uid);
    }

};