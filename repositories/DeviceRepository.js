'use strict';

module.exports = class {

    constructor(repository) {
        this.repository = repository;
    }

    persist(deviceModel) {
        return this.repository.persist(deviceModel);
    }

    update(deviceModel) {
        return this.repository.update(deviceModel);
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
    readGateway(uid){
        return this.repository.readGateway(uid);
    }
};