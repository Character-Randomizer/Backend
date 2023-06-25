const { test_races } = require('../../common_constants/races')

exports.seed = async function(knex) {
  await knex('Races').insert(test_races);
};
