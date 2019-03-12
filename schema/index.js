/**
 * [TODO]
 * extend the user query by a new argument/parameter userId, to be able to get a user by this id
 * add a new mutation/query to be able to create a new user
 */

const path = require('path')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require('graphql')
const user = require(path.resolve('model', 'user'))

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      /**
       * user query, returns a list of our users
       */
      users: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'user',
          fields: {
            firstname: {type: GraphQLID},
            lastname: {type: GraphQLString},
            id: {type: GraphQLString}
          }
        })),
        resolve () {
          return user.findAll({raw: true})
        }
      }
      /**
       * [TODO], create a new user
       */
    }
  })
})

module.exports = schema
