var middleware = require('./middleware');
module.exports = [
        {
            path: '/gateways',
            method: 'POST',
            handler: middleware.create
        },
        {
            path: '/gateways/{uid}/devices',
            method: 'POST',
            handler: middleware.addDevices
        },
        {
            path: '/gateways/{uid}/devices',
            method: 'GET',
            handler: middleware.readDevices
        },
        {
            path: '/gateways',
            method: 'GET',
            handler: middleware.readAll
        },
        {
            path: '/gateways/{uid}',
            method: 'GET',
            handler: middleware.readOne
        },
        {
            path: '/gateways/{uid}',
            method: 'PUT',
            handler: middleware.update
        },
        {
            path: '/gateways/{uid}',
            method: 'DELETE',
            handler: middleware.delete
        },
    ]