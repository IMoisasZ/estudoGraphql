import Cliente from '../types/clienteType.js'
import ClienteInput from '../types/clienteInputType.js'
import ClienteResolver from '../resolvers/clienteResolver.js'

const ClienteMutation = {
    createCliente: {
        type: Cliente,
        args: {
            cliente: {
                name: "cliente",
                type: ClienteInput
            }
        },
        resolve: (_, args) => ClienteResolver.createCliente(args.cliente) 
    },
    updateCliente: {
        type: Cliente,
        args: {
            cliente: {
                name: "cliente",
                type: ClienteInput
            }
        },
        resolve: (_, args) => ClienteResolver.updateCliente(args.cliente)
    }
}

export default ClienteMutation