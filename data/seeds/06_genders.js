const { test_genders } = require('../../common_constants/genders')

exports.seed = async function(knex) {
  await knex('Genders').insert(test_genders);
};
