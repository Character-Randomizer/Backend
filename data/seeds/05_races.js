//Just from players handbook currently

exports.seed = async function(knex) {
  await knex('races').insert([
    {
      race_name: `Dwarf`
    },
    {
      race_name: `Elf`
    },
    {
      race_name: `Halfling`
    },
    {
      race_name: `Human`
    },
    {
      race_name: `Dragonborn`
    },
    {
      race_name: `Gnome`
    },
    {
      race_name: `Half-Elf`
    },
    {
      race_name: `Half-Orc`
    },
    {
      race_name: `Tiefling`
    },
  ]);
};
