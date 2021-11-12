
const { Router } = require('express')

const rutas = Router()


const {
    crearReserva,
    buscarReserva,
    buscarReservas,
    actualizarReserva,
    eliminarReserva } = require('../controllers/contrReservas')


rutas.get('/hotel/reservas', buscarReservas)
rutas.get('/hotel/reservas/:id', buscarReserva)
rutas.post('/hotel/reservas', actualizarReserva)
rutas.put('/hotel/reservas/:id', crearReserva)
rutas.delete('/hotel/reservas/:id', eliminarReserva)


module.exports = rutas