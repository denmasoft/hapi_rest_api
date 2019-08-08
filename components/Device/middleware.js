const factory = require('./factory');
const middleware = {
    create: async function(req, res){
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
            return res.response({'message':'Device deleted.'}).code(204);
        } catch (error) {
            return res.response({'message':error}).code(403);
        }
    },
    readGateway: async function(req, res){
        try {
            let response = await factory.readGateway(req.params);
            return res.response(response).code(200);
        } catch (error) {
            res.response({'message':error}).code(403);
        }
    },
};

module.exports = middleware;