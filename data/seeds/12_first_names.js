const { fnames } = require(`../../common_constants/first_names`)

exports.seed = async function(knex) {
  await knex('First_Names').insert(fnames)
};
