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
     await queryInterface.bulkInsert('Users', [
      {pk_uid: 1,pk_wid: 1, name:"名前 名前A", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 1, name:"名前 名前B", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 2, name:"名前 名前C", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 3, name:"名前 名前D", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 1, name:"名前 名前E", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 2, name:"名前 名前F", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 3, name:"名前 名前G", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 1, name:"名前 名前H", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 2, name:"名前 名前I", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 3, name:"名前 名前J", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 1, name:"名前 名前K", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 2, name:"名前 名前L", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 3, name:"名前 名前M", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
      {pk_uid: 1,pk_wid: 1, name:"名前 名前N", nickname:"ニックネーム", password: "パスワード", pk_iid:2, createdAt: new Date(), updatedAt: new Date()},
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
