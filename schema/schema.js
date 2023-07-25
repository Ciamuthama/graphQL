const  graphql = require('graphql');
const _= require('lodash')
const { GraphQLObjectType,GraphQLString,GraphQLSchema} = graphql

const book = [
    { name: 'Any Name', genre: 'Any Genre', id: '1' },
    {name:'Any Name2',genre:'Any Genre2',id:'2' }]

const BookType = new GraphQLObjectType({
    name: 'Books',
    description:'hello it me',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre:{type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description:'hello it me',
    fields: () => ({
        book: {
            type: BookType,
            description:'hello it me',
            args: { id: { type: GraphQLString } },
            resolve(parent, args) { 
                return _.find(book,{id:args.id})
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query:RootQuery
})