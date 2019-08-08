const Hapi = require('@hapi/hapi');
const config = require('./config');
const { GatewayRoutes, DeviceRoutes } = require('./routes');

const app = new Hapi.Server({
    port: config.server.port,
    host: config.server.ip
});
app.realm.modifiers.route.prefix = '/api/v1';
app.route(GatewayRoutes);
app.route(DeviceRoutes);
module.exports = { app };
