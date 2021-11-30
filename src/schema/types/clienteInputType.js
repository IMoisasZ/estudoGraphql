import { GraphQLInputObjectType, GraphQLInt, GraphQLString } from 'graphql'

const ClienteInput = new GraphQLInputObjectType({
    name: "ClienteInput",
    fields: ()=> ({
        cliente_id:{
            type: GraphQLInt
        },
        nome_completo: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        cpf: {
            type: GraphQLString
        },
        data_nascimento: {
            type: GraphQLString
        }
    })
})

export default ClienteInput