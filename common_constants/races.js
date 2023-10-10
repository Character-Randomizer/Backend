//Just from players handbook currently

const test_races = [
  // Dwarf:
    {
      race_name: `Dwarf`,
      age: {
        max: 350,
        min: 50,
      },
      height: {
        avg: `4'3"`,
        max_height: `4'8"`,
        min_height: `3'10"`,
      },
      weight: {
        avg: 157,
        max_weight: 226,
        min_weight: 119
      },
      speed: 25,
      proficiencies: {
        darkvision: true, 
        tools: {
          pick_one: [`smith`, `brewer`, `mason`]
        },
      },
      bonuses: {
        saving_throws: {
          advantage: `poison`
        },
        resistance: [`poison`],
        stonecunning: {
            ability_check: {
              history: `add double proficiency bonus`
            },
            desc: `Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`}
      },
      subrace: {
        hill: {
          ability_increases:  {
            con: 2,
            wis: 1,
          },
          height: {
            base: `3'8"`, 
            max_modifier: 8,
          },
          hp: {
            max_increase: {
              amount: 1,
              desc: `Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.`
            }
          },
          weight: {
            base: 115,
            max_modifier: 12,
          }
        },
        mountain: {
          ability_increases: {
            con: 2,
            str: 2,
          },
          height: {
            base: `4'`, 
            max_modifier: 8,
          },
          weight: {
            base: 130,
            max_modifier: 12,
          },
          proficiencies: {
            weapons: {
              light: true,
              medium: true
            }
          }
        }
      },
      size: `medium`,
      languages: {
        common: true,
        dwarfish: true
      }
    },
  // Elf:
    {
      race_name: `Elf`,
      age: {
        max: 750,
        min: 100,
      },
      height: {
        avg: `5'5"`,
        max_height: `6'2"`,
        min_height: `4'8"`
      },
      weight: {
        avg: 128,
        max_weight: 180,
        min_weight: 92
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        skills: [`perception`]
      },
      bonuses: {
        saving_throws: {
          advantage: `charmed`
        },
        fey_ancestry: `You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`,
        trance: `Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`
      },
      subrace: {
        high: {
          height: {
            base: `4'6"`, 
            max_modifier: 20,
          },
          weight: {
            base: 90,
            max_modifier: 4,
          },
          ability_increases: {
            dex: 2,
            int: 1,
          },
          proficiencies: [`longsword`, `shortsword`, `shortbow`, `longbow`],
          cantrip: {
            pick_one: `wizard`
          },
          languages: {
            pick_one: `language`
          }
        },
        wood: {
          height: {
            base: `4'6"`, 
            max_modifier: 20,
          },
          weight: {
            base: 100,
            max_modifier: 4,
          },
          ability_increases: {
            dex: 2,
            wis: 1,
          },
          proficiencies: [`longsword`, `shortsword`, `shortbow`, `longbow`],
          speed: 35,
          mask_of_the_wild: `You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.`
        }
      },
      size: `medium`,
      languages: {
        common: true,
        elvish: true
      }
    },
  //Halfling
    {
      race_name: `Halfling`,
      age: {
        max: 250,
        min: 20,
      },
      height: {
        avg: `3'0"`,
        max_height: `3'3"`,
        min_height: `2'9"`,
      },
      weight: {
        avg: 40,
        max_weight: 43,
        min_weight: 37
      },
      speed: 25,
      proficiencies: {
        darkvision: false, 
      },
      bonuses: {
        ability_increases: {
          dex: 2
        },
        saving_throws: {
          advantage: `frightened`
        },
        lucky: {
          desc: `When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`
        },
        halfling_nibleness: {
          desc: `You can move through the space of any creature that is of a size larger than yours.`
        }
      },
      subrace: {
        lightfoot: {
          ability_increases: {
            ch: 1
          },
          natural_stealth: {
            desc: `You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.`
          }
        },
        stout: {
          ability_increases: {
            con: 1
          },
          saving_throws: {
            advantage: `poison`
          },
          resistance: `poison`
        }
      },
      size: `medium`,
      languages: {
        common: true,
        halfling: true
      }
    },
  // Human
    {
      race_name: `Human`,
      age: {
        max: 100,
        min: 18,
      },
      height: {
        avg: `5'7"`,
        max_height: `6'4"`,
        min_height: `4'10"`,
      },
      weight: {
        avg: 165,
        max_weight: 270,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: false, 
        tools: {
          pick_one: [`smith`, `brewer`, `mason`]
        },
      },
      subrace: {
        normal: {
          ability_increases: {
            ch: 1,
            con: 1,
            dex: 1,
            str: 1, 
            int: 1,
            wis: 1,
          },
          height: {
            base: `4'8"`, 
            max_modifier: 20,
          },
          weight: { 
            base: 110,
            max_modifier: 8,
          },
        },
        variant: {
          ability_increases: {
            pick_two: `abilities`
          },
          height: {
            base: `4'8"`, 
            max_modifier: 20,
          },
          proficiencies: {
            skills: {
              pick_one: `skills`
            }
          },
          feat: {
            pick_one: `feats`
          },
          weight: { 
            base: 110,
            max_modifier: 8,
          },
        }
      },
      size: `medium`,
      languages: {
        common: true,
        pick_one: `languages`
      }
    },
  //Dragonborn
    {
      race_name: `Dragonborn`,
      age: {
        max: 80,
        min: 15,
      },
      height: {
        avg: `6'3"`,
        max_height: `6'10"`,
        min_height: `5'8"`,
      },
      weight: {
        avg: 238,
        max_weight: 367,
        min_weight: 179
      },
      speed: 30,
      proficiencies: {
        darkvision: false, 
      },
      bonuses: {
        ability_increases: {
          str: 2, 
          ch: 1
        },
        resistance: `breath weapon damage type`,
        breath_weapon_desc: `You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.

        When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.
        
        After you use your breath weapon, you can’t use it again until you complete a short or long rest.`
      },
      subrace: {
        pick_one: {
          black: {
            damage_type: `acid`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          blue: {
            damage_type: `lightning`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          brass: {
            damage_type: `fire`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          bronze: {
            damage_type: `lightning`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          copper: {
            damage_type: `acid`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          gold: {
            damage_type: `fire`,
            breath_weapon: `15ft cone (Dex save)`
          },
          green: {
            damage_type: `poison`,
            breath_weapon: `15ft cone (Dex save)`
          },
          red: {
            damage_type: `fire`,
            breath_weapon: `15ft cone (Dex save)`
          },
          silver: {
            damage_type: `cold`,
            breath_weapon: `15ft cone (Dex save)`
          },
          white: {
            damage_type: `cold`,
            breath_weapon: `15ft cone (Dex save)`
          },
        }
      },
      size: `medium`,
      languages: {
        common: true,
        draconic: true
      }
    },
  //Gnome
    {
      race_name: `Gnome`,
      age: {
        max: 500,
        min: 40,
      },
      height: {
        avg: `3'4"`,
        max_height: `3'7"`,
        min_height: `3'1"`,
      },
      weight: {
        avg: 40,
        max_weight: 43,
        min_weight: 37
      },
      speed: 25,
      proficiencies: {
        darkvision: true, 
      },
      bonuses: {
        ability_increases: {
          int: 2
        },
        saving_throws: {
          advantage: {
            magic: [`int`, `wis`, `ch`]
          }
        }
      },
      subrace: {
        forest: {
          ability_increases: {
            dex: 1
          },
          cantrip: {
            minor_illusion: {
              spellcasting_ability: `int`
            }
          },
          speak_with_sm_beasts: {
              desc: `Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.`
            },
        },
        rock: {
          ability_increases: {
            con: 1
          },
          artificers_lore: {
            ability_check: {
              history: `add double proficiency bonus`
            },
            desc: `Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.`
          },
          tinker: {
            proficiencies: [`tinker`],
            desc: `You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.

            When you create a device, choose one of the following options:
            
            Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
            
            Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
            
            Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.`
          }
        }
      },
      size: `small`,
      languages: {
        common: true,
        gnomish: true
      }
    },
  //Half-Elf
    {
      race_name: `Half-Elf`,
      age: {
        max: 180,
        min: 20,
      },
      height: {
        avg: `5'6"`,
        max_height: `6'1"`,
        min_height: `4'11"`,
      },
      weight: {
        avg: 155,
        max_weight: 238,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        pick_two: `skills`
      },
      bonuses: {
        ability_increases: {
          cha: 2,
          pick_two: {
            ability_scores: 1
          }
        },
        saving_throws: {
          advantage: `charmed`
        },
      },
      size: `medium`,
      languages: {
        common: true,
        elvish: true
      }
    },
  //Half-Orc
    {
      race_name: `Half-Orc`,
      age: {
        max: 75,
        min: 14,
      },
      height: {
        avg: `5'9"`,
        max_height: `6'6"`,
        min_height: `5'0"`,
      },
      weight: {
        avg: 217,
        max_weight: 380,
        min_weight: 144
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        skills: `intimidation`
      },
      bonuses: {
        ability_increases: {
          str: 2,
          con: 1
        },
        relentless_endurance: {
          desc: `When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.`
        },
        feats: {
          savage_attack: true
        }
      },
      size: `medium`,
      languages: {
        common: true,
        orc: true
      }
    },
  //Tiefling
    {
      race_name: `Tiefling`,
      age: {
        max: 100,
        min: 18,
      },
      height: {
        avg: `5'6"`,
        max_height: `4'11"`,
        min_height: `6'1"`,
      },
      weight: {
        avg: 155,
        max_weight: 238,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
      },
      bonuses: {
        ability_increases: {
          int: 1,
          cha: 2
        },
        cantrip: {
          thaumaturgy: true
        },
        spells: {
          hellish_rebuke: {
            desc: `When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`
          }
        },
        resistance: [`fire`]
      },
      size: `medium`,
      languages: {
        common: true,
        infernal: true
      }
    },
  ]

const expected_races = [
  // Dwarf:
    {
      race_id: 1,
      race_name: `Dwarf`,
      age: {
        max: 350,
        min: 50,
      },
      height: {
        avg: `4'3"`,
        max_height: `4'8"`,
        min_height: `3'10"`,
      },
      weight: {
        avg: 157,
        max_weight: 226,
        min_weight: 119
      },
      speed: 25,
      proficiencies: {
        darkvision: true, 
        tools: {
          pick_one: [`smith`, `brewer`, `mason`]
        },
      },
      bonuses: {
        saving_throws: {
          advantage: `poison`
        },
        resistance: [`poison`],
        stonecunning: {
            ability_check: {
              history: `add double proficiency bonus`
            },
            desc: `Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`}
      },
      subrace: {
        hill: {
          ability_increases:  {
            con: 2,
            wis: 1,
          },
          height: {
            base: `3'8"`, 
            max_modifier: 8,
          },
          hp: {
            max_increase: {
              amount: 1,
              desc: `Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.`
            }
          },
          weight: {
            base: 115,
            max_modifier: 12,
          }
        },
        mountain: {
          ability_increases: {
            con: 2,
            str: 2,
          },
          height: {
            base: `4'`, 
            max_modifier: 8,
          },
          weight: {
            base: 130,
            max_modifier: 12,
          },
          proficiencies: {
            weapons: {
              light: true,
              medium: true
            }
          }
        }
      },
      size: `medium`,
      languages: {
        common: true,
        dwarfish: true
      }
    },
  // Elf:
    {
      race_id: 2,
      race_name: `Elf`,
      age: {
        max: 750,
        min: 100,
      },
      height: {
        avg: `5'5"`,
        max_height: `6'2"`,
        min_height: `4'8"`
      },
      weight: {
        avg: 128,
        max_weight: 180,
        min_weight: 92
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        skills: [`perception`]
      },
      bonuses: {
        saving_throws: {
          advantage: `charmed`
        },
        fey_ancestry: `You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`,
        trance: `Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`
      },
      subrace: {
        high: {
          height: {
            base: `4'6"`, 
            max_modifier: 20,
          },
          weight: {
            base: 90,
            max_modifier: 4,
          },
          ability_increases: {
            dex: 2,
            int: 1,
          },
          proficiencies: [`longsword`, `shortsword`, `shortbow`, `longbow`],
          cantrip: {
            pick_one: `wizard`
          },
          languages: {
            pick_one: `language`
          }
        },
        wood: {
          height: {
            base: `4'6"`, 
            max_modifier: 20,
          },
          weight: {
            base: 100,
            max_modifier: 4,
          },
          ability_increases: {
            dex: 2,
            wis: 1,
          },
          proficiencies: [`longsword`, `shortsword`, `shortbow`, `longbow`],
          speed: 35,
          mask_of_the_wild: `You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.`
        }
      },
      size: `medium`,
      languages: {
        common: true,
        elvish: true
      }
    },
  //Halfling
    {
      race_id: 3,
      race_name: `Halfling`,
      age: {
        max: 250,
        min: 20,
      },
      height: {
        avg: `3'0"`,
        max_height: `3'3"`,
        min_height: `2'9"`,
      },
      weight: {
        avg: 40,
        max_weight: 43,
        min_weight: 37
      },
      speed: 25,
      proficiencies: {
        darkvision: false, 
      },
      bonuses: {
        ability_increases: {
          dex: 2
        },
        saving_throws: {
          advantage: `frightened`
        },
        lucky: {
          desc: `When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`
        },
        halfling_nibleness: {
          desc: `You can move through the space of any creature that is of a size larger than yours.`
        }
      },
      subrace: {
        lightfoot: {
          ability_increases: {
            ch: 1
          },
          natural_stealth: {
            desc: `You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.`
          }
        },
        stout: {
          ability_increases: {
            con: 1
          },
          saving_throws: {
            advantage: `poison`
          },
          resistance: `poison`
        }
      },
      size: `medium`,
      languages: {
        common: true,
        halfling: true
      }
    },
  // Human
    {
      race_id: 4,
      race_name: `Human`,
      age: {
        max: 100,
        min: 18,
      },
      height: {
        avg: `5'7"`,
        max_height: `6'4"`,
        min_height: `4'10"`,
      },
      weight: {
        avg: 165,
        max_weight: 270,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: false, 
        tools: {
          pick_one: [`smith`, `brewer`, `mason`]
        },
      },
      subrace: {
        normal: {
          ability_increases: {
            ch: 1,
            con: 1,
            dex: 1,
            str: 1, 
            int: 1,
            wis: 1,
          },
          height: {
            base: `4'8"`, 
            max_modifier: 20,
          },
          weight: { 
            base: 110,
            max_modifier: 8,
          },
        },
        variant: {
          ability_increases: {
            pick_two: `abilities`
          },
          height: {
            base: `4'8"`, 
            max_modifier: 20,
          },
          proficiencies: {
            skills: {
              pick_one: `skills`
            }
          },
          feat: {
            pick_one: `feats`
          },
          weight: { 
            base: 110,
            max_modifier: 8,
          },
        }
      },
      size: `medium`,
      languages: {
        common: true,
        pick_one: `languages`
      }
    },
  //Dragonborn
    {
      race_id: 5,
      race_name: `Dragonborn`,
      age: {
        max: 80,
        min: 15,
      },
      height: {
        avg: `6'3"`,
        max_height: `6'10"`,
        min_height: `5'8"`,
      },
      weight: {
        avg: 238,
        max_weight: 367,
        min_weight: 179
      },
      speed: 30,
      proficiencies: {
        darkvision: false, 
      },
      bonuses: {
        ability_increases: {
          str: 2, 
          ch: 1
        },
        resistance: `breath weapon damage type`,
        breath_weapon_desc: `You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.

        When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.
        
        After you use your breath weapon, you can’t use it again until you complete a short or long rest.`
      },
      subrace: {
        pick_one: {
          black: {
            damage_type: `acid`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          blue: {
            damage_type: `lightning`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          brass: {
            damage_type: `fire`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          bronze: {
            damage_type: `lightning`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          copper: {
            damage_type: `acid`,
            breath_weapon: `5 by 30ft line (Dex save)`
          },
          gold: {
            damage_type: `fire`,
            breath_weapon: `15ft cone (Dex save)`
          },
          green: {
            damage_type: `poison`,
            breath_weapon: `15ft cone (Dex save)`
          },
          red: {
            damage_type: `fire`,
            breath_weapon: `15ft cone (Dex save)`
          },
          silver: {
            damage_type: `cold`,
            breath_weapon: `15ft cone (Dex save)`
          },
          white: {
            damage_type: `cold`,
            breath_weapon: `15ft cone (Dex save)`
          },
        }
      },
      size: `medium`,
      languages: {
        common: true,
        draconic: true
      }
    },
  //Gnome
    {
      race_id: 6,
      race_name: `Gnome`,
      age: {
        max: 500,
        min: 40,
      },
      height: {
        avg: `3'4"`,
        max_height: `3'7"`,
        min_height: `3'1"`,
      },
      weight: {
        avg: 40,
        max_weight: 43,
        min_weight: 37
      },
      speed: 25,
      proficiencies: {
        darkvision: true, 
      },
      bonuses: {
        ability_increases: {
          int: 2
        },
        saving_throws: {
          advantage: {
            magic: [`int`, `wis`, `ch`]
          }
        }
      },
      subrace: {
        forest: {
          ability_increases: {
            dex: 1
          },
          cantrip: {
            minor_illusion: {
              spellcasting_ability: `int`
            }
          },
          speak_with_sm_beasts: {
              desc: `Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.`
            },
        },
        rock: {
          ability_increases: {
            con: 1
          },
          artificers_lore: {
            ability_check: {
              history: `add double proficiency bonus`
            },
            desc: `Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.`
          },
          tinker: {
            proficiencies: [`tinker`],
            desc: `You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.

            When you create a device, choose one of the following options:
            
            Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
            
            Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
            
            Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.`
          }
        }
      },
      size: `small`,
      languages: {
        common: true,
        gnomish: true
      }
    },
  //Half-Elf
    {
      race_id: 7,
      race_name: `Half-Elf`,
      age: {
        max: 180,
        min: 20,
      },
      height: {
        avg: `5'6"`,
        max_height: `6'1"`,
        min_height: `4'11"`,
      },
      weight: {
        avg: 155,
        max_weight: 238,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        pick_two: `skills`
      },
      bonuses: {
        ability_increases: {
          cha: 2,
          pick_two: {
            ability_scores: 1
          }
        },
        saving_throws: {
          advantage: `charmed`
        },
      },
      size: `medium`,
      languages: {
        common: true,
        elvish: true
      }
    },
  //Half-Orc
    {
      race_id: 8,
      race_name: `Half-Orc`,
      age: {
        max: 75,
        min: 14,
      },
      height: {
        avg: `5'9"`,
        max_height: `6'6"`,
        min_height: `5'0"`,
      },
      weight: {
        avg: 217,
        max_weight: 380,
        min_weight: 144
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
        skills: `intimidation`
      },
      bonuses: {
        ability_increases: {
          str: 2,
          con: 1
        },
        relentless_endurance: {
          desc: `When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.`
        },
        feats: {
          savage_attack: true
        }
      },
      size: `medium`,
      languages: {
        common: true,
        orc: true
      }
    },
  //Tiefling
    {
      race_id: 9,
      race_name: `Tiefling`,
      age: {
        max: 100,
        min: 18,
      },
      height: {
        avg: `5'6"`,
        max_height: `4'11"`,
        min_height: `6'1"`,
      },
      weight: {
        avg: 155,
        max_weight: 238,
        min_weight: 114
      },
      speed: 30,
      proficiencies: {
        darkvision: true, 
      },
      bonuses: {
        ability_increases: {
          int: 1,
          cha: 2
        },
        cantrip: {
          thaumaturgy: true
        },
        spells: {
          hellish_rebuke: {
            desc: `When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`
          }
        },
        resistance: [`fire`]
      },
      size: `medium`,
      languages: {
        common: true,
        infernal: true
      }
    },
  ]

module.exports = {
    test_races,
    expected_races
}