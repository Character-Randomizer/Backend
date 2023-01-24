 //Currently the first class focus for each class
 //Will try to come back and finish for all classes
 
 exports.seed = async function(knex) {
 
  await knex('class_focuses').insert([
    {
      class_focus_id: 1,
      class_id: 1,
      class_focus: `Alchemist`, 
      focus_description: `An Alchemist is an expert at combining reagents to produce mystical effects. Alchemists use their creations to give life and to leech it away. Alchemy is the oldest of artificer traditions, and its versatility has long been valued during times of war and peace.`
    },
    {
      class_focus_id: 2,
      class_id: 2,
      class_focus: `Path of the Ancestral Guardian`,
      focus_description: `Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.

      Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.` 
    },
    {
      class_focus_id: 3,
      class_id: 4,
      class_focus: `Order of the Ghostslayer`,
      focus_description: `The Order of the Ghostslayer is the oldest of the blood hunter orders, its members having originally rediscovered the secrets of hemocraft and refined them for combat against the scourge of undeath. Ghostslayers seek out and study the moment of death, obsessing over the mystery of the transition from life, and the unholy power that can cause the dead to rise once more. These zealous blood hunters make it their life’s work to destroy the scourge of undeath wherever it is found, tuning their abilities to engage undead creatures and those who manipulate the necromancy that creates them.`
    },
    {
      class_focus_id: 4,
      class_id: 3,
      class_focus: `College of Creation`,
      focus_description: `Bards believe the cosmos is a work of art—the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation. The bards of the College of Creation draw on that primeval song through dance, music, and poetry, and their teachers share this lesson: “Before the sun and the moon, there was the Song, and its music awoke the first dawn. Its melodies so delighted the stones and trees that some of them gained a voice of their own. And now they sing too. Learn the Song, students, and you too can teach the mountains to sing and dance.”

      Dwarves and gnomes often encourage their bards to become students of the Song of Creation. And among dragonborn, the Song of Creation is revered, for legends portray Bahamut and Tiamat—the greatest of dragons—as two of the song’s first singers.`
    },
    {
      class_focus_id: 5,
      class_id: 5,
      class_focus: `Arcana Domain`,
      focus_description: `Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.

      The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and Wee Jas of Greyhawk.`
    },
    {
      class_focus_id: 6,
      class_id: 6,
      class_focus: `Circle of dreams`,
      focus_description: `Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids’ guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest.`
    },
    {
      class_focus_id: 7,
      class_id: 7,
      class_focus: `Arcane Archer`,
      focus_description: `An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of the most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.`
    },{
      class_focus_id: 8,
      class_id: 8,
      class_focus: `Way of Mercy`,
      focus_description: `Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy.

      Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies.
      
      The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.`
    },
    {
      class_focus_id: 9,
      class_id: 9,
      class_focus: `Oath of Conquest`,
      focus_description: `The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn’t enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.

      Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins — called hell knights — as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness.`
    },
    {
      class_focus_id: 10,
      class_id: 10,
      class_focus: `Beast Master`,
      focus_description: `The Beast Master archetype embodies a friendship between the civilized races and the beasts of the wild. United in focus, beast and ranger fight the monsters that threaten civilization and the wilderness alike.`
    },
    {
      class_focus_id: 11,
      class_id: 11,
      class_focus: `Aracane Trickster`,
      focus_description: `Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.`
    },
    {
      class_focus_id: 12,
      class_id: 12,
      class_focus: `Abberant Mind`,
      focus_description: `An alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?

      As an Aberrant Mind sorcerer, you decide how you acquired your powers. Were you born with them? Or did an event later in life leave you shining with psionic awareness? Consult the Aberrant Origins table for a possible origin of your power.`
    },
    {
      class_focus_id: 13,
      class_id: 13,
      class_focus: `The Archfey`,
      focus_description: `Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being’s motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.` 
    },
    {
      class_focus_id: 14,
      class_id: 14,
      class_focus: `Bladesinging`,
      focus_description: `Bladesingers master a tradition of wizardry that incorporates swordplay and dance. Originally created by elves, this tradition has been adopted by non-elf practitioners, who honor and expand on the elven ways.

      In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense. Many who have observed a bladesinger at work remember the display as one of the more beautiful experiences in their life, a glorious dance accompanied by a singing blade.` 
    },
  ]);
};
