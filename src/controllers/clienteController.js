import ClienteService from '../services/clienteService.js'

async function createCliente(req, res, next){
    try {
        const cliente = req.body
        res.send(await ClienteService.createCliente(cliente))
    } catch (error) {
        next(error)
    }
}

async function updateCliente(req, res, next){
    try {
        const cliente = req.body
        res.send(await ClienteService.updateCliente(cliente))
    } catch (error) {
        next(error)
    }
}

async function getClientes(req, res, next){
    try {
        res.send(await ClienteService.getClientes())
    } catch (error) {
        next(error)
    }
}

async function getCliente(req, res, next){
    try {
        res.send(await ClienteService.getCliente(req.params.cliente_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createCliente,
    updateCliente,
    getClientes,
    getCliente
}