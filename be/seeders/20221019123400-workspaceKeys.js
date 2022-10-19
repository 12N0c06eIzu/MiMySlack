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
     await queryInterface.bulkInsert('workspaceKeys', [
      {pk_wid: 1,pk_uid: 1, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 2,pk_uid: 1, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 3,pk_uid: 1, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 4,pk_uid: 1, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 5,pk_uid: 1, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 1,pk_uid: 2, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 2,pk_uid: 2, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 3,pk_uid: 2, createdAt: new Date(), updatedAt: new Date()},
      {pk_wid: 4,pk_uid: 2, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
