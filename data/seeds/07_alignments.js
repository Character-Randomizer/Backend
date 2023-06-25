const { test_alignments } = require('../../common_constants/alignments')
 
exports.seed = async function(knex) {
  await knex('Alignments').insert(test_alignments)};
