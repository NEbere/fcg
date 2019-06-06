const path = require('path')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = require('graphql')

const user = require(path.resolve('model', 'user'))
const permission = require(path.resolve('model', 'permission'))

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
            id: {type: GraphQLString},
            permissionId: { type: GraphQLString  }
          }
        })),
        resolve () {
          return user.findAll({raw: true})
        }
      },
      getUser: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'getUser',
          fields: {
            id: { type: GraphQLID },
            firstname: { type: GraphQLString },
            lastname: { type: GraphQLString }
          }
        })),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve (root, args) {
          const { id } = args
          return user.findAll({where: {'id': id}, raw: true})
        }
      },
      createUser: {
        type: new GraphQLObjectType({
          name: 'createUser',
          fields: {
            id: { type: GraphQLID },
            firstname: { type: GraphQLString },
            lastname: { type: GraphQLString }
          }
        }),
        args: {
          firstname: { type: new GraphQLNonNull(GraphQLString) },
          lastname: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve (root, args) {
          const { firstname, lastname } = args
          return  user.create({firstName: firstname, lastName: lastname})
        }
      },
      permissions: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'permissions',
          fields: {
            title: {type: GraphQLString},
            id: {type: GraphQLID}
          }
        })),
        resolve () {
          return permission.findAll({raw: true})
        }
      },
      getPermission: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'getPermission',
          fields: {
            title: { type: GraphQLString },
            id: { type: GraphQLID }
          }
        })),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve (root, args) {
          const { id } = args
          return permission.findAll({where: {'id': id}, raw: true})
        }
      }
    }
  })
})

module.exports = schema
