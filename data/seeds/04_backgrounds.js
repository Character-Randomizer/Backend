 const { test_backgrounds } = require('../../common_constants/backgrounds')

 exports.seed = async function(knex) {
  await knex(`Backgrounds`).insert(test_backgrounds)
};
