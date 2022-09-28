'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'user_id', Sequelize.INTEGER);
    await queryInterface.renameColumn('Users', 'id', 'user_id');
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'user_id', Sequelize.INTEGER);
    await queryInterface.renameColumn('Users', 'user_id', 'id');
  },
};
