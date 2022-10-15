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
     await queryInterface.bulkInsert('Comments', [
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'スレッド１', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'スレッド２', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'スレッド３', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'スレッド４', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'スレッド５', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'スレッド６', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'スレッド７', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'スレッド８', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'スレッド９', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'スレッド１０', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'スレッド１１', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'スレッド１２', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
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
