import ClienteModel from '../models/clienteModel.js'

async function createCliente(cliente){
    try {
        return await ClienteModel.create(cliente)
    } catch (error) {
        throw error
    }
}

async function updateCliente(cliente){
    try {
        await ClienteModel.update(cliente, {
            where:{
                cliente_id: cliente.cliente_id
            }
        })
        return await getCliente(cliente.cliente_id)
    } catch (error) {
        throw error
    }
}

async function getClientes(){
    try {
        return await ClienteModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getCliente(cliente_id){
    try {
        return await ClienteModel.findByPk(cliente_id)
    } catch (error) {
        throw error
    }
}

export default {
    createCliente,
    updateCliente,
    getClientes,
    getCliente
}