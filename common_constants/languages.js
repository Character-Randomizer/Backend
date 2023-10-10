const languages = [
    {
        language: `common`,
        script: `common`,
        speakers: [`humans`],
    },
    {
        language: `draconic`,
        script: `draconic`,
        lang_desc: `Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.`,
        speakers: [`dragons`, `dragonborn`],
    },
    {
        language: `elvish`,
        script: `elvish`,
        lang_desc: `Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.`,
        speakers: [`elves`, `half elves`],
    },
    {
        language: `orc`,
        script: `dwarvish`,
        lang_desc: `Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.`,
        speakers: [`orcs`],
    },
    {
        language: `dwarvish`,
        script: `dwarvish`,
        lang_desc: `Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.`,
        speakers: [`dwarves`],
    },
    {
        language: `gnomish`,
        script: `dwarvish`,
        lang_desc: `The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.`,
        speakers: [`gnomes`],
    },
    {
        language: `infernal`,
        script: `infernal`,
        speakers: [`devils`, `tieflings`],
    },
    {
        language: `halfling`,
        script: `common`,
        lang_desc: `The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.`,
        speakers: [`halflings`],
    },
    {
        language: `giant`,
        script: `dwarvish`,
        speakers: [`orgres`, `giants`],
    },
    {
        language: `goblin`,
        script: `dwarvish`,
        speakers: [`goblinoids`],

    },
    {
        language: `primordial`,
        script: `dwarvish`,
        speakers: [`elementals`],
    },
    {
        language: `abyssal`,
        script: `infernal`,
        speakers: [`demons`],
    },
    {
        language: `celestial`,
        script: `celestial`,
        speakers: [`celestials`, `aasimars`],
    },
    {
        language: `deep speech`,
        speakers: [`mind flayers`, `beholders`],
    },
    {
        language: `sylvan`,
        script: `elvish`,
        speakers: [`fey creatures`],
    },
    {
        language: `undercommon`,
        script: `elvish`,
        speakers: [`underworld traders`],
    },
]

const expected_languages = [
    {
        lang_id: 1, 
        language: `common`,
        script: `common`,
        speakers: [`humans`],
    },
    {
        lang_id: 2, 
        language: `draconic`,
        script: `draconic`,
        lang_desc: `Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.`,
        speakers: [`dragons`, `dragonborn`],
    },
    {
        lang_id: 3,
        language: `elvish`,
        script: `elvish`,
        lang_desc: `Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.`,
        speakers: [`elves`, `half elves`],
    },
    {
        lang_id: 4,
        language: `orc`,
        script: `dwarvish`,
        lang_desc: `Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.`,
        speakers: [`orcs`],
    },
    {
        lang_id: 5, 
        language: `dwarvish`,
        script: `dwarvish`,
        lang_desc: `Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.`,
        speakers: [`dwarves`],
    },
    {
        lang_id: 6, 
        language: `gnomish`,
        script: `dwarvish`,
        lang_desc: `The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.`,
        speakers: [`gnomes`],
    },
    {
        lang_id: 7, 
        language: `infernal`,
        script: `infernal`,
        speakers: [`devils`, `tieflings`],
    },
    {
        lang_id: 8,
        language: `halfling`,
        script: `common`,
        lang_desc: `The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.`,
        speakers: [`halflings`],
    },
    {
        lang_id: 9, 
        language: `giant`,
        script: `dwarvish`,
        speakers: [`orgres`, `giants`],
    },
    {
        lang_id: 10, 
        language: `goblin`,
        script: `dwarvish`,
        speakers: [`goblinoids`],

    },
    {
        lang_id: 11, 
        language: `primordial`,
        script: `dwarvish`,
        speakers: [`elementals`],
    },
    {
        lang_id: 12, 
        language: `abyssal`,
        script: `infernal`,
        speakers: [`demons`],
    },
    {
        lang_id: 13, 
        language: `celestial`,
        script: `celestial`,
        speakers: [`celestials`, `aasimars`],
    },
    {
        lang_id: 14, 
        language: `deep speech`,
        speakers: [`mind flayers`, `beholders`],
    },
    {
        lang_id: 15, 
        language: `sylvan`,
        script: `elvish`,
        speakers: [`fey creatures`],
    },
    {
        lang_id: 16,
        language: `undercommon`,
        script: `elvish`,
        speakers: [`underworld traders`],
    },
]

module.exports = {
    languages,
    expected_languages
}