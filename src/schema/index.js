import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import ClienteQuery from './queries/clienteQuery.js'
import ClienteMutation from './mutations/clienteMutattion.js'

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...ClienteQuery,
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            ...ClienteMutation
        }

    })
})

export default Schema