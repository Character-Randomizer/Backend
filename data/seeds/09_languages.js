const { languages } = require(`../../common_constants/languages`)

exports.seed = async function(knex) {
  await knex('Languages').insert(languages)
};