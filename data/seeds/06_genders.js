const { test_genders } = require('../../api/test_constants/genders')

exports.seed = async function(knex) {
  await knex('Genders').insert(test_genders);
};
