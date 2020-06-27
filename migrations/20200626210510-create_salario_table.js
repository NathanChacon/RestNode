'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("salarios",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable()
  }
};
