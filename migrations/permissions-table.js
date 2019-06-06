const path = require('path')
const permission = require(path.resolve('model', 'permission'))

const TABLE_NAME = 'permissions'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      TABLE_NAME,
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        title: {type: Sequelize.STRING, allowNull: false},
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: () => Date.now(),
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: () => Date.now(),
          allowNull: false
        },
        deletedAt: {type: Sequelize.DATE}
      },
      {freezeTableName: true, timestamps: true, paranoid: true}
    )

    await permission.create({title: 'cardealer'})
    await permission.create({title: 'carinspector'})
  },

  down: (queryInterface, Sequelize) => {
    /* ignore */
  }
}
