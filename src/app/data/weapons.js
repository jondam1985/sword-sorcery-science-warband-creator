const weapons = [
    // Simple Weapons
    {
      name: "Augmented Limb",
      type: "Simple",
      hands: [1],
      properties: [],
      maneuvers: [],
      points: 1
    },
    {
      name: "Bellringer",
      type: "Simple",
      hands: [1],
      properties: [],
      maneuvers: [],
      points: 1
    },
    {
      name: "Bill Hook",
      type: "Simple",
      hands: [2],
      properties: ["reach"],
      maneuvers: ["Drag"],
      points: 1
    },
    {
      name: "Club, articulated",
      type: "Simple",
      hands: [1,2],
      properties: ["chain"],
      maneuvers: ["Bellringer"],
      points: 1
    },
    {
      name: "Club/Mace",
      type: "Simple",
      hands: [1,2],
      properties: [],
      maneuvers: ["Bellringer"],
      points: 0
    },
    {
      name: "Dagger",
      type: "Simple",
      hands: [1],
      properties: ["quick", "weak"],
      maneuvers: ["Weak Spot"],
      points: 1
    },
    {
      name: "Fist",
      type: "Simple",
      hands: [1],
      properties: ["weak"],
      maneuvers: ["Bellringer"],
      points: 0
    },
    {
      name: "Flask",
      type: "Simple",
      hands: [1],
      properties: ["item"],
      maneuvers: ["Burst"],
      points: 1
    },
    {
      name: "Holy Symbol",
      type: "Simple",
      hands: [1],
      properties: ["item"],
      maneuvers: ["Repel"],
      points: 0
    },
    {
      name: "Instrument",
      type: "Simple",
      hands: [1,2],
      properties: ["item"],
      maneuvers: ["Inspire"],
      points: 1
    },
    {
      name: "Lantern",
      type: "Simple",
      hands: [1],
      properties: ["item", "light"],
      maneuvers: [],
      points: 0
    },
    {
      name: "Pitchfork",
      type: "Simple",
      hands: [2],
      properties: ["unwieldy", "weak"],
      maneuvers: ["Set"],
      points: 0
    },
    {
      name: "Poleaxe",
      type: "Simple",
      hands: [2],
      properties: ["reach"],
      maneuvers: ["Sweep"],
      points: 1
    },
    {
      name: "Potion",
      type: "Simple",
      hands: [1],
      properties: ["item"],
      maneuvers: ["Cure", "Enhance"],
      points: 1
    },
    {
      name: "Scythe",
      type: "Simple",
      hands: [2],
      properties: ["reach", "unwieldy"],
      maneuvers: ["Sweep"],
      points: 1
    },
    {
      name: "Sickle",
      type: "Simple",
      hands: [1],
      properties: ["wounding", "unwieldy"],
      maneuvers: ["Weak Spot"],
      points: 1
    },
    {
      name: "Spear",
      type: "Simple",
      hands: [1,2],
      properties: ["piercing +1", "reach"],
      maneuvers: ["Set"],
      points: 2
    },
    {
      name: "Staff",
      type: "Simple",
      hands: [2],
      properties: ["defensive", "quick"],
      maneuvers: ["Parry", "Sweep"],
      points: 1
    },
    {
      name: "Torch",
      type: "Simple",
      hands: [1],
      properties: ["light", "weak"],
      maneuvers: ["Repel"],
      points: 1
    },
  
    // Shields
    {
      name: "Buckler",
      type: "Shield",
      hands: [1],
      properties: ["defensive", "item"],
      maneuvers: ["Parry"],
      points: 0
    },
    {
      name: "Shield",
      type: "Shield",
      hands: [1],
      properties: ["defensive", "item"],
      maneuvers: ["Parry", "Block"],
      points: 1
    },
  
    // Natural Weapons
    {
      name: "Bite/Sting",
      type: "Natural",
      hands: "-",
      properties: ["wounding"],
      maneuvers: ["Weak Spot"],
      points: 2
    },
    {
      name: "Bludgeon",
      type: "Natural",
      hands: "-",
      properties: ["crushing"],
      maneuvers: ["Smash"],
      points: 2
    },
    {
      name: "Claws",
      type: "Natural",
      hands: "-",
      properties: ["quick"],
      maneuvers: ["Pounce"],
      points: 3
    },
    {
      name: "Missile",
      type: "Natural",
      hands: "-",
      properties: ["medium range"],
      maneuvers: [],
      points: 1
    },
    {
      name: "Horns",
      type: "Natural",
      hands: "-",
      properties: [],
      maneuvers: ["Throw", "Trample"],
      points: 1
    },
    {
      name: "Tail",
      type: "Natural",
      hands: "-",
      properties: ["reach"],
      maneuvers: ["Sweep"],
      points: 2
    },
    {
      name: "Tentacles",
      type: "Natural",
      hands: "-",
      properties: ["short range", "entangle"],
      maneuvers: ["Drag"],
      points: 1
    },
  
    // Might-based Ranged Weapons
    {
      name: "Bow",
      type: "Might Ranged",
      hands: [2],
      properties: ["long range", "reload 1"],
      maneuvers: [],
      points: 2
    },
    {
      name: "Javelin/Spear",
      type: "Might Ranged",
      hands: [1],
      properties: ["medium range"],
      maneuvers: [],
      points: 1
    },
    {
      name: "Sling",
      type: "Might Ranged",
      hands: [1],
      properties: ["long range", "reload 1"],
      maneuvers: [],
      points: 1
    },
    {
      name: "Throwing axe/Club",
      type: "Might Ranged",
      hands: [1],
      properties: ["short range"],
      maneuvers: [],
      points: 1
    },
    {
      name: "Throwing Knives",
      type: "Might Ranged",
      hands: [1],
      properties: ["short range", "quick", "weak"],
      maneuvers: [],
      points: 1
    },
  
    // Firepower-based Ranged Weapons
    {
      name: "Auto / Energy Pistol",
      type: "Firepower Ranged",
      hands: [1],
      properties: ["aim 1", "medium range", "multishot", "quick"],
      maneuvers: ["Buttstroke"],
      points: 3
    },
    {
      name: "Auto / Energy Rifle",
      type: "Firepower Ranged",
      hands: [2],
      properties: ["aim 1", "piercing +1", "medium range", "multishot", "quick"],
      maneuvers: ["Buttstroke"],
      points: 3
    },
    {
      name: "Crossbow",
      type: "Firepower Ranged",
      hands: [1,2],
      properties: ["long range", "piercing +1", "reload 2"],
      maneuvers: ["Buttstroke"],
      points: 2
    },
    {
      name: "Harquebus",
      type: "Firepower Ranged",
      hands: [2],
      properties: ["long range", "piercing +2", "reload 3"],
      maneuvers: ["Buttstroke"],
      points: 3
    },
    {
      name: "Flamer",
      type: "Firepower Ranged",
      hands: [1,2],
      properties: ["aim 2", "cone AoE"],
      maneuvers: ["Martyr"],
      points: 4
    },
    {
      name: "Pistolet",
      type: "Firepower Ranged",
      hands: [1],
      properties: ["short range", "piercing +2", "reload 2"],
      maneuvers: ["Buttstroke"],
      points: 2
    },
    {
      name: "RPG",
      type: "Firepower Ranged",
      hands: [1,2],
      properties: ["aim 2", "blast AoE", "long lange"],
      maneuvers: ["Martyr"],
      points: 4
    },
    {
      name: "Shotgun",
      type: "Firepower Ranged",
      hands: [1,2],
      properties: ["piercing +1 (+2 if target at ½ stick or closer)", "cone AoE", "multishot", "reload 2"],
      maneuvers: ["Buttstroke"],
      points: 3
    },
    {
      name: "Sniper Rifle",
      type: "Firepower Ranged",
      hands: [2],
      properties: ["aim 2", "line AoE", "piercing +2"],
      maneuvers: ["Buttstroke"],
      points: 4
    },
  
    // Martial Weapons
    {
      name: "Axe",
      type: "Martial",
      hands: [1,2],
      properties: ["powerful"],
      maneuvers: ["Sweep"],
      points: 2
    },
    {
      name: "Banner",
      type: "Martial",
      hands: [1],
      properties: ["item"],
      maneuvers: ["Rally"],
      points: 1
    },
    {
      name: "Gory Trophy",
      type: "Martial",
      hands: [1],
      properties: ["item"],
      maneuvers: ["Taunt"],
      points: 1
    },
    {
      name: "Greatsword",
      type: "Martial",
      hands: [2],
      properties: ["powerful", "reach"],
      maneuvers: ["Riposte", "Sweep"],
      points: 3
    },
    {
      name: "Halberd",
      type: "Martial",
      hands: [2],
      properties: ["reach"],
      maneuvers: ["Set", "Smash"],
      points: 3
    },
    {
      name: "Hammer/Pick",
      type: "Martial",
      hands: [1,2],
      properties: ["crushing"],
      maneuvers: ["Smash"],
      points: 2
    },
    {
      name: "Lance",
      type: "Martial",
      hands: [1],
      properties: ["mounted", "piercing +1", "reach"],
      maneuvers: [],
      points: 2
    },
    {
      name: "Martial Arts",
      type: "Martial",
      hands: [2],
      properties: ["defensive", "quick", "weak"],
      maneuvers: ["Parry", "Throw"],
      points: 2
    },
    {
      name: "Net",
      type: "Martial",
      hands: [1],
      properties: ["reach", "entangle"],
      maneuvers: [],
      points: 1
    },
    {
      name: "Parrying Dagger",
      type: "Martial",
      hands: [1],
      properties: ["weak"],
      maneuvers: ["Parry", "Weak Spot"],
      points: 1
    },
    {
      name: "Sword, fencing",
      type: "Martial",
      hands: [1],
      properties: ["piercing +1", "quick", "weak"],
      maneuvers: ["Parry", "Riposte"],
      points: 2
    },
    {
      name: "Sword, slashing",
      type: "Martial",
      hands: [1,2],
      properties: ["wounding"],
      maneuvers: ["Riposte"],
      points: 2
    },
    {
      name: "Sword, thrusting",
      type: "Martial",
      hands: [1],
      properties: ["piercing +1"],
      maneuvers: ["Riposte"],
      points: 2
    },
    {
      name: "Whip",
      type: "Martial",
      hands: [1],
      properties: ["short range"],
      maneuvers: ["Drag"],
      points: 1
    }
  ];

  export {
    weapons,
  }
  