const bcrypt = require(`bcryptjs`)

const hash = bcrypt.hashSync(`bardic!nspiration`, 9)

//continue making password encrypted (a seecret) after you can check the endpoint works with the seed file.
// Use this article to help you: https://medium.com/@jengopockets/encrypting-seeded-passwords-with-node-js-knex-and-bcrypt-e2efe56f745e

exports.seed = async function(knex) {
  await knex('users').insert([
    {first_name: 'Testy', 
    last_name: `Subject`, 
    username: `testSubject47`, 
    password: hash,
    email: `test47@gmail.com`, 
    terms: true, 
    dob: 09061647
  },
  ]);
};
