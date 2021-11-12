
const { Router } = require('express')

const rutas = Router()

const {
    crearCliente,
    buscarCliente,
    buscarClientes,
    actualizarCliente,
    eliminarCliente } = require('../controllers/contrClientes')


rutas.get('/hotel/clientes', buscarClientes)
rutas.get('/hotel/clientes/:id', buscarCliente)
rutas.post('/hotel/clientes', crearCliente)
rutas.put('/hotel/clientes/:id', actualizarCliente)
rutas.delete('/hotel/clientes/:id', eliminarCliente)




module.exports = rutas