'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('SessionKeys', 'expires');
    await queryInterface.addColumn('SessionKeys', 'expires', Sequelize.DATE);
    await queryInterface.removeColumn('SessionKeys', 'created_at');
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('SessionKeys', 'expires', Sequelize.TIME);
    await queryInterface.addColumn('SessionKeys', 'created_at', Sequelize.TIME);
  },
};
