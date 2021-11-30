import ClienteRepository from '../repositories/clienteRepository.js'

async function createCliente(cliente){
    return await ClienteRepository.createCliente(cliente)
}

async function updateCliente(cliente){
    return await ClienteRepository.updateCliente(cliente)
}

async function getClientes(){
    return await ClienteRepository.getClientes()
}

async function getCliente(cliente_id){
    return await ClienteRepository.getCliente(cliente_id)
}

export default {
    createCliente,
    updateCliente,
    getClientes,
    getCliente
}