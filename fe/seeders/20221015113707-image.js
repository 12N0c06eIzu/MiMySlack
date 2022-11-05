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
     await queryInterface.bulkInsert('Images', [
      {pk_iid: 1,pk_uid: 1, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
      {pk_iid: 1,pk_uid: 2, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
      {pk_iid: 1,pk_uid: 3, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
      {pk_iid: 1,pk_uid: 4, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
      {pk_iid: 1,pk_uid: 5, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
      {pk_iid: 1,pk_uid: 6, path:'Path/img.jpg', createdAt: new Date(), updatedAt: new Date()},
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
