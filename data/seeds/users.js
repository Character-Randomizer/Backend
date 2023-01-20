const bcrypt = require(`bcryptjs`)

const hash1 = bcrypt.hashSync(`12345`, 9)
const hash2 = bcrypt.hashSync()

exports.seed = async function(knex) {
  await knex(`users`).truncate()
  await knex('users').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
