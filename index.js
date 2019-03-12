const express = require('express')
const graphqlHTTP = require('express-graphql')
const path = require('path')
const schema = require(path.resolve('schema'))
const app = express()
const {port} = require(path.resolve('config', 'server'))
const getUsersCount = require(path.resolve('helper', 'getUsersCount'))

app.post('/graphql', graphqlHTTP({schema, graphiql: false}))
app.get('/graphql', graphqlHTTP({schema, graphiql: true}))

app.listen(port, () => {
  console.log(`graphiql interface started on http://localhost:${port}/graphql`)

  getUsersCount((error, count) => {
    console.log('Total amount of users in Company', count)
  })
})
