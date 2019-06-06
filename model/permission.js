const path = require('path')
const orm = require(path.resolve('orm'))
const Sequelize = require('sequelize')

const permission = orm.define(
    'permission',
    {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
        title: Sequelize.STRING
    })

permission.associate = models => {
    permission.belongsTo(models.user);
}

module.exports = permission