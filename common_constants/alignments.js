const test_alignments = [
    {
      alignment: `Lawful Good`,
      alignment_acronym: `LG`, 
      alignment_description: `Creatures that can be counted on to do the right thing as expected by society. Gold dragons and paladins are typically lawful good.`
    },
    {
      alignment: `Neutral Good`,
      alignment_acronym: `NG`, 
      alignment_description: `Creatures that do the best they can to help others according to their needs. Many celestials are neutral good.`
    },
    {
      alignment: `Chaotic Good`,
      alignment_acronym: `CG`, 
      alignment_description: `Creatures act as their conscience directs, with little regard for what others expect. Copper dragons and unicorns are typically chaotic good.`
    },
    {
      alignment: `Lawful Neutral`,
      alignment_acronym: `LN`, 
      alignment_description: `Creatures act in accordance with law, tradition, or personal codes. Modrons, many wizards, and monks are lawful neutral.`
    },
    {
      alignment: `Neutral`,
      alignment_acronym: `N`, 
      alignment_description: `Creatures who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Druids are traditionally neutral, as are townsfolk.`
    },
    {
      alignment: `Chaotic Neutral`,
      alignment_acronym: `CN`, 
      alignment_description: `Creatures follow their whims, holding their personal freedom above all else. Many rogues and bards are chaotic neutral.`
    },
    {
      alignment: `Lawful Evil`,
      alignment_acronym: `LE`, 
      alignment_description: `Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils and blue dragons are typically lawful evil.`
    },
    {
      alignment: `Neutral Evil`,
      alignment_acronym: `NE`, 
      alignment_description: `Creatures who do whatever they can get away with, without compassion or qualms. Yugoloths are typically neutral evil.`
    },
    {
      alignment: `Chaotic Evil`,
      alignment_acronym: `CE`, 
      alignment_description: `Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons and red dragons are typically chaotic evil.`
    },
  ]

  const expected_alignments = [
    {
        alignment_id: 1,
        alignment: `Lawful Good`,
        alignment_acronym: `LG`, 
        alignment_description: `Creatures that can be counted on to do the right thing as expected by society. Gold dragons and paladins are typically lawful good.`
    },
    {
        alignment_id: 2, 
        alignment: `Neutral Good`,
        alignment_acronym: `NG`, 
        alignment_description: `Creatures that do the best they can to help others according to their needs. Many celestials are neutral good.`
    },
    {
        alignment_id: 3, 
        alignment: `Chaotic Good`,
        alignment_acronym: `CG`, 
        alignment_description: `Creatures act as their conscience directs, with little regard for what others expect. Copper dragons and unicorns are typically chaotic good.`
    },
    {
        alignment_id: 4, 
        alignment: `Lawful Neutral`,
        alignment_acronym: `LN`, 
        alignment_description: `Creatures act in accordance with law, tradition, or personal codes. Modrons, many wizards, and monks are lawful neutral.`
    },
    {
        alignment_id: 5, 
        alignment: `Neutral`,
        alignment_acronym: `N`, 
        alignment_description: `Creatures who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Druids are traditionally neutral, as are townsfolk.`
    },
    {
        alignment_id: 6, 
        alignment: `Chaotic Neutral`,
        alignment_acronym: `CN`, 
        alignment_description: `Creatures follow their whims, holding their personal freedom above all else. Many rogues and bards are chaotic neutral.`
    },
    {
        alignment_id: 7, 
        alignment: `Lawful Evil`,
        alignment_acronym: `LE`, 
        alignment_description: `Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils and blue dragons are typically lawful evil.`
    },
    {
        alignment_id: 8,
        alignment: `Neutral Evil`,
        alignment_acronym: `NE`, 
        alignment_description: `Creatures who do whatever they can get away with, without compassion or qualms. Yugoloths are typically neutral evil.`
    },
    {
        alignment_id: 9, 
        alignment: `Chaotic Evil`,
        alignment_acronym: `CE`, 
        alignment_description: `Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons and red dragons are typically chaotic evil.`
    },
  ]

  module.exports = {
    test_alignments, 
    expected_alignments
  }