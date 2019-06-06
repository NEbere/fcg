const path = require('path')
const orm = require(path.resolve('orm'))
const Sequelize = require('sequelize')


const user = orm.define(
  'user',
  {
    id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true},
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  })

  user.associate = models => {
    user.hasOne(models.user);
}

module.exports = user