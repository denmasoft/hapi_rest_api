'use strict';

const ListGateways = require('../use_cases/gateway/listGateways');
const CreateGateway = require('../use_cases/gateway/createGateway');
const GetGateway = require('../use_cases/gateway/getGateway');
const UpdateGateway = require('../use_cases/gateway/updateGateway');
const DeleteGateway = require('../use_cases/gateway/removeGateway');
const AddDevicesToGateway = require('../use_cases/gateway/addDevicesToGateway');
const ListGatewaysDevices = require('../use_cases/gateway/listGatewaysDevices');
const GatewayRepository = require('../repositories/GatewayRepository');

const MongoDbGatewaysRepository = require('../repositories_interfaces/mongoDb/MongoDbGatewaysRepository');
const gatewayRepository = new GatewayRepository(new MongoDbGatewaysRepository());

module.exports = {

    async createGateway(data) {
        const { uid, name, ipv4 } = data;
        let gateway;
        try {
            gateway = await CreateGateway(uid, name, ipv4, { gatewayRepository });
            return gateway;
        }catch (e) {
            throw e;
        }
    },
    async findGateways() {

        const gateways = await ListGateways({ gatewayRepository });
        return gateways;
    },

    async getGateway(uid) {

        const gateway = await GetGateway(uid, { gatewayRepository });
        if (!gateway) {
            return null;
        }
        return gateway;
    },

    async updateGateway(uid, data) {

        const gateway = await UpdateGateway(uid, data, { gatewayRepository });
        if (!gateway) {
            return null;
        }
        return gateway;
    },

    async deleteGateway(uid) {
        return await DeleteGateway(uid, { gatewayRepository });
    },

    async readDevices(uid) {

        const devices = await ListGatewaysDevices(uid, { gatewayRepository });
        return devices;
    },

    async addDevices(uid, data) {
        console.log(uid);
        console.log(data);
        const gateways = await AddDevicesToGateway(uid, data, { gatewayRepository });
        return gateways;
    },

};
