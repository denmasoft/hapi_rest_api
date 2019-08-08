var middleware = require('./middleware');
module.exports = [
        {
            path: '/devices',
            method: 'POST',
            handler: middleware.create
        },
        {
            path: '/devices',
            method: 'GET',
            handler: middleware.readAll
        },
        {
            path: '/devices/{uid}',
            method: 'GET',
            handler: middleware.readOne
        },
        {
            path: '/devices/{uid}',
            method: 'PUT',
            handler: middleware.update
        },
        {
            path: '/devices/{uid}',
            method: 'DELETE',
            handler: middleware.delete
        },
        {
            path: '/devices/{uid}/gateway',
            method: 'GET',
            handler: middleware.readGateway
        },
    ]