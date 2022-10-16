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
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'コメント１', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'コメント２', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'コメント３', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'コメント４', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'コメント５', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'コメント６', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'コメント７', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'コメント８', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'コメント９', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 1,pk_uid: 1, content: 'コメント１０', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 2,pk_uid: 1, content: 'コメント１１', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
      {pk_cid: 1,pk_tid: 3,pk_uid: 1, content: 'コメント１２', send_dt: new Date(), createdAt: new Date(), updatedAt: new Date()},
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
