const  graphql = require('graphql');
const _= require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = graphql

const book = [
    { name: 'Any Name', genre: 'Any Genre', id: '1' },
    {name:'Any Name2',genre:'Any Genre2',id:'2' }]

const BookType = new GraphQLObjectType({
    name: 'books',
    description:'hello it me1',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre:{type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description:'hello it me2',
    fields: () => ({
        books: {
            type: GraphQLList(BookType),
            description: 'hello it me3',
            args: { id: { type: GraphQLString } },
            resolve() {
                return book
            }
        },
        book: {
            type: BookType,
            description: 'hello it me3',
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(book, { id: args.id })

            }
        }
    })
})

module.exports = new GraphQLSchema({
    query:RootQuery
})