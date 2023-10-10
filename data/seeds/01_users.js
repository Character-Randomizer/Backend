const { seedUsers } = require('../../common_constants/users')

exports.seed = async function(knex) {
  await knex('Users').insert(seedUsers);
};