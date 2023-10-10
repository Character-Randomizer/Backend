const abilities = [
    {
        ability: `constitution`,
        acronym: `con`,
        ability_desc: `measuring endurance, health, stamina, and vital force`
    },
    {
        ability: `strength`,
        acronym: `str`,
        ability_desc: `measures bodily power, athletic training, and the extent to which you can exert raw physical force`,
    },
    {
        ability: `dexterity`,
        acronym: `dex`,
        ability_desc: `measures agility, reflexes, and balance`,
    },
    {
        ability: `intelligence`,
        acronym: `int`,
        ability_desc: `measures mental acuity, accuracy of recall, and the ability to reason`,
    },
    {
        ability: `wisdom`,
        acronym: `wis`,
        ability_desc: `reflects how attuned you are to the world around you and represents perceptiveness and intuition`,
    },
    {
        ability: `charisma`,
        acronym: `cha`,
        ability_desc: `measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality`,
    }
]

const expected_abilities = [
    {
        ability_id: 1,
        ability: `constitution`,
        acronym: `con`,
        ability_desc: `measuring endurance, health, stamina, and vital force`
    },
    {
        ability_id: 2,
        ability: `strength`,
        acronym: `str`,
        ability_desc: `measures bodily power, athletic training, and the extent to which you can exert raw physical force`,
    },
    {
        ability_id: 3,
        ability: `dexterity`,
        acronym: `dex`,
        ability_desc: `measures agility, reflexes, and balance`,
    },
    {
        ability_id: 4, 
        ability: `intelligence`,
        acronym: `int`,
        ability_desc: `measures mental acuity, accuracy of recall, and the ability to reason`,
    },
    {
        ability_id: 5,
        ability: `wisdom`,
        acronym: `wis`,
        ability_desc: `reflects how attuned you are to the world around you and represents perceptiveness and intuition`,
    },
    {
        ability_id: 6,
        ability: `charisma`,
        acronym: `cha`,
        ability_desc: `measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality`,
    }
]

module.exports = {
    abilities,
    expected_abilities
}