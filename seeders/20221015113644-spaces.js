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
     await queryInterface.bulkInsert('Spaces', [
      {pk_sid: 1,pk_wid: 1, name: 'スペース１', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 2, name: 'スペース２', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 3, name: 'スペース３', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 1, name: 'スペース４', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 2, name: 'スペース５', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 3, name: 'スペース６', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 1, name: 'スペース７', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
      {pk_sid: 1,pk_wid: 1, name: 'スペース８', dc_flag:0, createdAt: new Date(), updatedAt: new Date()},
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
