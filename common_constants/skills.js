const skills = [
    {
        skill: `athletics`,
        ability: `str`,
        skill_desc: `Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.`,
    },
    {
        skill: `acrobatics`,
        ability: `dex`,
        skill_desc: `Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The DM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.`,
    },
    {
        skill: `sleight of hand`,
        ability: `dex`,
        skill_desc: `Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket.`,
    },
    {
        skill: `stealth`,
        ability: `dex`,
        skill_desc: `Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.`,
    },
    {
        skill: `arcana`,
        ability: `int`,
        skill_desc: `Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.`,
    },
    {
        skill: `history`,
        ability: `int`,
        skill_desc: `Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.`,
    },
    {
        skill: `investigation`,
        ability: `int`,
        skill_desc: `When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.`,
    },
    {
        skill: `nature`,
        ability: `int`,
        skill_desc: `Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.`,
    },
    {
        skill: `religion`,
        ability: `int`,
        skill_desc: `Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.`,
    },
    {
        skill: `animal handling`,
        ability: `wis`,
        skill_desc: `When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal’s intentions, the DM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.`,
    },
    {
        skill: `insight`,
        ability: `wis`,
        skill_desc: `Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.`,
    },
    {
        skill: `medicine`,
        ability: `wis`,
        skill_desc: `A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.`,
    },
    {
        skill: `perception`,
        ability: `wis`,
        skill_desc: `Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.`,
    },
    {
        skill: `survival`,
        ability: `wis`,
        skill_desc: `The DM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.`,
    },
    {
        skill: `deception`,
        ability: `cha`,
        skill_desc: `Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie.`,
    },
    {
        skill: `intimidation`,
        ability: `cha`,
        skill_desc: `When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.`,
    },
    {
        skill: `performance`,
        ability: `cha`,
        skill_desc: `Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.`,
    },
    {
        skill: `persuasion`,
        ability: `cha`,
        skill_desc: `When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.`,
    },
]

const expected_skills = [
    {
        skill_id: 1,
        skill: `athletics`,
        ability: `str`,
        skill_desc: `Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.`,
    },
    {
        skill_id: 2, 
        skill: `acrobatics`,
        ability: `dex`,
        skill_desc: `Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The DM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.`,
    },
    {
        skill_id: 3, 
        skill: `sleight of hand`,
        ability: `dex`,
        skill_desc: `Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket.`,
    },
    {
        skill_id: 4, 
        skill: `stealth`,
        ability: `dex`,
        skill_desc: `Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.`,
    },
    {
        skill_id: 5, 
        skill: `arcana`,
        ability: `int`,
        skill_desc: `Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.`,
    },
    {
        skill_id: 6, 
        skill: `history`,
        ability: `int`,
        skill_desc: `Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.`,
    },
    {
        skill_id: 7, 
        skill: `investigation`,
        ability: `int`,
        skill_desc: `When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.`,
    },
    {
        skill_id: 8,
        skill: `nature`,
        ability: `int`,
        skill_desc: `Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.`,
    },
    {
        skill_id: 9, 
        skill: `religion`,
        ability: `int`,
        skill_desc: `Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.`,
    },
    {
        skill_id: 10,
        skill: `animal handling`,
        ability: `wis`,
        skill_desc: `When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal’s intentions, the DM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.`,
    },
    {
        skill_id: 11, 
        skill: `insight`,
        ability: `wis`,
        skill_desc: `Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.`,
    },
    {
        skill_id: 12, 
        skill: `medicine`,
        ability: `wis`,
        skill_desc: `A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.`,
    },
    {
        skill_id: 13,
        skill: `perception`,
        ability: `wis`,
        skill_desc: `Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.`,
    },
    {
        skill_id: 14,
        skill: `survival`,
        ability: `wis`,
        skill_desc: `The DM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.`,
    },
    {
        skill_id: 15,
        skill: `deception`,
        ability: `cha`,
        skill_desc: `Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie.`,
    },
    {
        skill_id: 16,
        skill: `intimidation`,
        ability: `cha`,
        skill_desc: `When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.`,
    },
    {
        skill_id: 17,
        skill: `performance`,
        ability: `cha`,
        skill_desc: `Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.`,
    },
    {
        skill_id: 18,
        skill: `persuasion`,
        ability: `cha`,
        skill_desc: `When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.`,
    },
]

module.exports = {
    skills,
    expected_skills
}