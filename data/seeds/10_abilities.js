const { abilities } = require(`../../common_constants/abilities`)

exports.seed = async function(knex) {
  await knex('Abilities').insert(abilities)
};
