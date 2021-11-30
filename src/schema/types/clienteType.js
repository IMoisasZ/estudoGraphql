import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

const Cliente = new GraphQLObjectType({
    name: "Cliente",
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

export default Cliente