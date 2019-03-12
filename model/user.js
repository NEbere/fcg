const path = require('path')
const orm = require(path.resolve('orm'))
const Sequelize = require('sequelize')

module.exports = orm.define(
  'user',
  {
    id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true},
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  }
)

