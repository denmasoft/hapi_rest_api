const factory = require('./factory');
const isIp = require('is-ip');
const middleware = {
    create: async function(req, res){
        if(!isIp(req.body.ipv4)){
            return res.response({'message':'That is not an ipv4 address'}).code(422);
        }
        try {
            let response = await factory.create(req.body);
            return res.response(response).code(201);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    readAll: async function(req, res){
        try {
            let response = await factory.readAll();
            return res.response(response).code(200);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    readOne: async function(req, res){
        try {
            let response = await factory.readOne(req.params);
            return res.response(response).code(200);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    update: async function(req, res){
        try {
            let response = await factory.update(req.params, req.body);
            return res.response(response).code(200);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    delete: async function(req, res){
        try {
            await factory.delete(req.params);
            return res.response({'message':'Gateway deleted.'}).code(204);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    readDevices: async function(req, res){
        try {
            let response = await factory.readDevices(req.params);
            return res.response(response).code(200);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    addDevices: async function(req, res){
        try {
            let response = await factory.addDevices(req.params, req.body);
            return res.response(response).code(200);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
};

module.exports = middleware;