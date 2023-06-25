const { test_characters } = require('../../common_constants/characters')

exports.seed = async function(knex) {
  await knex('Characters').insert(test_characters);
};
