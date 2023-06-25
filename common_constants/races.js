//Just from players handbook currently

const test_races = [
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
  ]

const expected_races = [
    {
        race_id: 1,
        race_name: `Dwarf`
    },
    {
        race_id: 2, 
        race_name: `Elf`
    },
    {
        race_id: 3, 
        race_name: `Halfling`
    },
    {
        race_id: 4, 
        race_name: `Human`
    },
    {
        race_id: 5, 
        race_name: `Dragonborn`
    },
    {
        race_id: 6, 
        race_name: `Gnome`
    },
    {
        race_id: 7, 
        race_name: `Half-Elf`
    },
    {
        race_id: 8, 
        race_name: `Half-Orc`
    },
    {
        race_id: 9, 
        race_name: `Tiefling`
    },
]

module.exports = {
    test_races,
    expected_races
}