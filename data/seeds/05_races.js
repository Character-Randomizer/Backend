const { test_races } = require('../../api/test_constants/races')

exports.seed = async function(knex) {
  await knex('Races').insert(test_races);
};
