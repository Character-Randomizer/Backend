const { test_characters } = require('../../api/test_constants/characters')

exports.seed = async function(knex) {
  await knex('Characters').insert(test_characters);
};
