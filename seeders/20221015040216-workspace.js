'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Workcpaces', [
      {pk_wid: 1, name: 'ワークスペース１', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 2, name: 'ワークスペース２', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 3, name: 'ワークスペース３', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 4, name: 'ワークスペース４', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 5, name: 'ワークスペース５', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 6, name: 'ワークスペース６', createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 7, name: 'ワークスペース７', createdAt: new Date(), updatedAt: new Date()}
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Workcpaces', null, {});

  }
};
