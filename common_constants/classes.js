const classes = [
    {
      class: 'Artificer',
      class_description: `Masters of invention, artificers use ingenuity and magic to unlcok exraordinary capabilities in objects.`
      },
    {
      class: 'Barbarian',
      class_description: `A fierce warrior of primitive background who can enter a battle rage.`
    },
    {
      class: 'Bard',
      class_description: `An inspiring musician whose power echoes the music of creation.`
    },
    {
      class: 'Blood Hunter',
      class_description: `Willing to suffer whatever it takes to achieve victory, these adept warriors have forged themselves into a potent force dedicated to protecting the innocent.`
    },
    { 
      class: 'Cleric',
      class_description: `A priestly champion who wields divine magic in service of a higher power.`
    },
    {
      class: 'Druid',
      class_description: `A priest of the Old Faith, wielding the powers of nature and adopting animal forms.`
    },
    {
      class: 'Fighter',
      class_description: `A master of martial combat, skilled with a variety of weapons and armor.`
    },
    {
      class: 'Monk',
      class_description: `A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.`
    },
    {
      class: 'Paladin',
      class_description: `A holy warrior bound to a sacred oath.`
    },
    {
      class: 'Ranger',
      class_description: `A warrior who combats threats on the edges of civilization.`
    },
    {
      class: 'Rogue',
      class_description: `A scoundrel who uses stealth and trickery to overcome obstacles and enemies.`
    },
    {
      class: 'Sorcerer',
      class_description: `A spellcaster who draws on inherent magic from a gift or bloodline.`
    },
    {
      class: 'Warlock',
      class_description: `A wielder of magic that is derived from a bargain with an extraplanar entity.`
    },
    {
      class: 'Wizard',
      class_description: `A scholarly magic user capable of manipulating the structures of reality.`
    },
  ];

  const expected_classes = [
    {
      class_id: 1, 
      class: 'Artificer',
      class_description: `Masters of invention, artificers use ingenuity and magic to unlcok exraordinary capabilities in objects.`
      },
    {
      class_id: 2, 
      class: 'Barbarian',
      class_description: `A fierce warrior of primitive background who can enter a battle rage.`
    },
    {
      class_id: 3, 
      class: 'Bard',
      class_description: `An inspiring musician whose power echoes the music of creation.`
    },
    {
      class_id: 4, 
      class: 'Blood Hunter',
      class_description: `Willing to suffer whatever it takes to achieve victory, these adept warriors have forged themselves into a potent force dedicated to protecting the innocent.`
    },
    {
      class_id: 5, 
      class: 'Cleric',
      class_description: `A priestly champion who wields divine magic in service of a higher power.`
    },
    {
      class_id: 6, 
      class: 'Druid',
      class_description: `A priest of the Old Faith, wielding the powers of nature and adopting animal forms.`
    },
    {
      class_id: 7, 
      class: 'Fighter',
      class_description: `A master of martial combat, skilled with a variety of weapons and armor.`
    },
    {
      class_id: 8, 
      class: 'Monk',
      class_description: `A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.`
    },
    {
      class_id: 9, 
      class: 'Paladin',
      class_description: `A holy warrior bound to a sacred oath.`
    },
    {
      class_id: 10, 
      class: 'Ranger',
      class_description: `A warrior who combats threats on the edges of civilization.`
    },
    {
      class_id: 11, 
      class: 'Rogue',
      class_description: `A scoundrel who uses stealth and trickery to overcome obstacles and enemies.`
    },
    {
      class_id: 12, 
      class: 'Sorcerer',
      class_description: `A spellcaster who draws on inherent magic from a gift or bloodline.`
    },
    {
      class_id: 13, 
      class: 'Warlock',
      class_description: `A wielder of magic that is derived from a bargain with an extraplanar entity.`
    },
    {
      class_id: 14, 
      class: 'Wizard',
      class_description: `A scholarly magic user capable of manipulating the structures of reality.`
    },
  ];

  module.exports = {
    classes,
    expected_classes
  }