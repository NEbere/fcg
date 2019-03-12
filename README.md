# Help new business requirements arrived!

Our current service is only able to return all our users.

It should be possible
 - to get a single user based on the userid
 - rewrite the getUsersCount helper (helper/getUsersCount) to async / await (Promises)
 - we need to be able to return keys of an abritrary JSON for a given value, please write this helper helper/getKeys.js
 - having a new permission system, to add / remove permissions ('cardealer', 'carinspector') to a user

Please add those feature to the current graphqlschema (schema directory)

Bonus:
Writing tests for the resolvers (any framework you like)

## Getting started
  - Node 8
  - npm install
  - npm run migrate (running the database migrations)
  - npm start (starting the service)

## NOTES
 - you might not be able to finish everything, in case you stuck just proceed with another task
 - sqllite (db), sequelize (orm) are used
 - feel free the use graphiql api interface, it is hosted under http://localhost:${port}/graphql
 - the default query for getting the users is {users{id, firstname, lastname}}
 - you might end up writing a new migration for the new permission system
 - no need to create resolvers for managing new permissions, like creating/deleting new permissions through the api
  (more important is the database schema / migration)
