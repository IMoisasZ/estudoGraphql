import express from 'express'
import ClienteRoute from './src/routes/clienteRoute.js'
import { buildSchema } from 'graphql'
import { graphqlHTTP } from  'express-graphql'
import ClienteService from './src/services/clienteService.js'
import Schema from './src/schema/index.js'
const app = express()

app.use(express.json())

// const schema = buildSchema(`
//     type Cliente {
//         cliente_id: Int
//         nome_completo: String
//         email: String
//         cpf: String
//         data_nascimento: String
//     }
//     input ClienteInput {
//         cliente_id: Int
//         nome_completo: String
//         email: String
//         cpf: String
//         data_nascimento: String
//     }
//     type Query {
//         getClientes: [Cliente]
//         getCliente(cliente_id: Int): Cliente
//     }
//     type Mutation {
//         createCliente(cliente: ClienteInput): Cliente
//         updateCliente(cliente: ClienteInput): Cliente
//     }

// `)

// const root = {
//     getClientes:() => ClienteService.getClientes(),

//     getCliente(args) {
//         return ClienteService.getCliente(args.cliente_id)
//     },

//     createCliente ({cliente}){
//         return ClienteService.createCliente(cliente)
//     },

//     updateCliente ({cliente}){
//         return ClienteService.updateCliente(cliente)
//     }
// }

app.use('/cliente', ClienteRoute)

app.use('/graphql', graphqlHTTP({ 
    schema: Schema,
    // rootValue: root,
    graphiql: true
}))


export { app }