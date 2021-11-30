import { GraphQLList, GraphQLInt } from 'graphql'
import Cliente from '../types/clienteType.js'
import ClienteResolver from '../resolvers/clienteResolver.js'

const ClienteQuery = {
    getClientes: {
        type: new GraphQLList(Cliente),
        resolve: () => ClienteResolver.getClientes()
    },
    getCliente: {
        type: Cliente,
        args: {
            cliente_id: {
                name: "cliente_id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => ClienteResolver.getCliente(args.cliente_id)
    }
}

export default ClienteQuery