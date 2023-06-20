const { test_focuses } = require('../../api/test_constants/class_focuses')
 
 exports.seed = async function(knex) {
  await knex('Class_focuses').insert(test_focuses);
};
