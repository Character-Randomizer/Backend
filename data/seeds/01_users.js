require('dotenv').config()
const { seedUsers } = require('../../api/test_constants/users')

exports.seed = async function(knex) {
  await knex('Users').insert(seedUsers);
};