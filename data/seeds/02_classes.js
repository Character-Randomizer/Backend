const { test_classes } = require(`../../common_constants/classes`)

exports.seed = async function(knex) {
  await knex('Classes').insert(test_classes)
};
