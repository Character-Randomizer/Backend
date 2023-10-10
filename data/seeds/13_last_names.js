const { lnames } = require(`../../common_constants/last_names`)

exports.seed = async function(knex) {
  await knex('Last_Names').insert(lnames)
};
