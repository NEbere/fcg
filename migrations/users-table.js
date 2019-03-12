const path = require('path')
const user = require(path.resolve('model', 'user'))

const TABLE_NAME = 'users'

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
        firstname: {type: Sequelize.STRING, allowNull: false},
        lastname: {type: Sequelize.STRING, allowNull: false},
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

    await user.create({firstName: 'John', lastName: 'Doe'})
    await user.create({firstName: 'Jane', lastName: 'Doe'})
  },

  down: (queryInterface, Sequelize) => {
    /* ignore */
  }
}
