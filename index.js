var argv = require('minimist')(process.argv.slice(2));
var SocketCluster = require('socketcluster');
var socketCluster = new SocketCluster({
    workers: require('os').cpus.length,
    brokers: require('os').cpus.length,
    port: process.env.PORT || 3002,
    appName: "Gateways Api",
    workerController: __dirname + '/worker.js',
    brokerController: __dirname + '/broker.js',
    socketChannelLimit: 1000,
    rebootWorkerOnCrash: true
});