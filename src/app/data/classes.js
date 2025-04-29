const classes = [
  {
    name: "Acrobat",
    points: 1,
    limit: 2,
    weapons: ["Simple", "Ranged"],
    traits: [
      "Disengage costs 1 action.",
      "If this model ends a Move action next to a climbable piece of terrain, it may move to the top.",
      "May jump up to 1 stick gaps.",
      "If this model falls, place it upright where it landed."
    ]
  },
  {
    name: "Alchemist",
    points: 1,
    limit: 1,
    weapons: ["Simple"],
    traits: ["Interact actions with flasks or potions cost 1 action."]
  },
  {
    name: "Archer",
    points: 2,
    limit: 2,
    weapons: ["Simple", "Martial", "Ranged"],
    traits: ["Bows gain quick."]
  },
  {
    name: "Assassin",
    points: 2,
    limit: 2,
    weapons: ["Simple", "Ranged"],
    traits: [
      "Daggers are not weak.",
      "+1 to melee Attack Result Table rolls."
    ]
  },
  {
    name: "Barbarian",
    points: 1,
    limit: null,
    weapons: ["Simple", "Martial", "Shields"],
    traits: [
      "+1 to Will rolls.",
      "If this model ends a Move action within a ½ stick of an enemy, it may move BtB."
    ]
  },
  {
    name: "Beast",
    points: 1,
    limit: 2,
    weapons: ["Natural"],
    traits: [
      "Can buy 2D10 or 4C Def and Mgt without weapon requirements.",
      "Cavalry do not get bonuses to Mgt or Def vs. Beasts.",
      "Can move a ½ stick when taking a Stand action.",
      "Can not use the Interact action."
    ]
  },
  {
    name: "Berserker",
    points: 2,
    limit: 2,
    weapons: ["Simple", "Martial", "Shields"],
    traits: [
      "-1 to Def rolls.",
      "Recover actions are automatically successful."
    ]
  },
  {
    name: "Cavalry",
    points: 2,
    limit: 1,
    weapons: ["Simple", "Martial", "Ranged", "Shields"],
    traits: [
      "+1 to Mgt rolls when making Attacks against a non-Cavalry model.",
      "+1 to Def rolls when targeted with a Melee Attack and -1 to Def rolls when targeted by a Ranged Attack from a non-Cavalry model.",
      "Cannot climb terrain.",
      "Knows the Trample maneuver."
    ]
  },
  {
    name: "Commander",
    points: 2,
    limit: 1,
    weapons: ["Simple", "Martial", "Shields"],
    traits: [
      "This model may take an Interact action to let any allied model in LoS immediately take a Move, Melee Attack, or Ranged Attack action."
    ]
  },
  {
    name: "Druid",
    points: 2,
    limit: 1,
    weapons: ["Simple"],
    traits: [
      "Knows grasping vines spell.",
      "Beasts gain a +1 to Mgt rolls when within ½ stick of this model.",
      "Sickles are not unwieldy."
    ]
  },
  {
    name: "Fighter",
    points: 1,
    limit: null,
    weapons: ["Simple", "Martial", "Ranged", "Shields"],
    traits: ["+1 to Mgt rolls."]
  },
  {
    name: "Flyer",
    points: 1,
    limit: 2,
    weapons: ["Simple", "Martial", "Ranged", "Natural"],
    traits: ["This model can ignore terrain and other models when taking Move actions."]
  },
  {
    name: "Fool",
    points: 1,
    limit: 1,
    weapons: ["Simple"],
    traits: ["Knows the Taunt maneuver."]
  },
  {
    name: "Healer",
    points: 1,
    limit: 1,
    weapons: ["Simple", "Shields"],
    traits: [
      "While BtB with an allied model, use an Interact action to make an unopposed Will roll. A success removes 1 condition, doubling the roll removes 2.",
      "Knows holy aura."
    ]
  },
  {
    name: "Hunter",
    points: 2,
    limit: 2,
    weapons: ["Simple", "Ranged"],
    traits: [
      "Targets gain no cover vs. ranged attacks.",
      "No shot on the run penalty to ranged attacks."
    ]
  },
  {
    name: "Knight",
    points: 1,
    limit: 2,
    weapons: ["Simple", "Martial", "Shields"],
    traits: [
      "Can buy 2D10 or 4C Def without being equipped with a shield.",
      "Reroll Def rolls of 1 if equipped with a shield."
    ]
  },
  {
    name: "Magic User",
    points: 1,
    limit: 1,
    weapons: ["Magical"],
    traits: ["Can purchase spells."]
  },
  {
    name: "Magical Beast",
    points: 2,
    limit: 1,
    weapons: ["Natural"],
    traits: [
      "Can purchase spells.",
      "Can buy 2D10 or 4C Def and Mgt without weapon requirements.",
      "Cavalry do not get bonuses to Mgt or Def vs. Magical Beasts."
    ]
  },
  {
    name: "Martial Artist",
    points: 1,
    limit: null,
    weapons: ["Simple", "Martial", "Ranged"],
    traits: ["Martial Arts are not weak."]
  },
  {
    name: "Monster",
    points: 3,
    limit: 1,
    weapons: ["Simple", "Martial", "Natural"],
    traits: [
      "All enemy models within 1 stick have a -1 penalty to Will rolls.",
      "Can buy 2D10 or 4C Def and Mgt without weapon requirements."
    ]
  },
  {
    name: "Necromancer",
    points: 2,
    limit: 1,
    weapons: ["Simple", "Magical"],
    traits: [
      "Knows unlife.",
      "Scythes gain wounding and are not unwieldy."
    ]
  },
  {
    name: "Pit Fighter",
    points: 1,
    limit: 2,
    weapons: ["Simple", "Martial", "Shields"],
    traits: [
      "Knows the Distract maneuver.",
      "Melee Attacks vs. this model never get a Gang-up bonus."
    ]
  },
  {
    name: "Sharpshooter",
    points: 3,
    limit: 1,
    weapons: ["Simple", "Ranged"],
    traits: ["Knows the Moving Target maneuver"]
  },
  {
    name: "Scout",
    points: 2,
    limit: 2,
    weapons: ["Simple", "Martial", "Ranged"],
    traits: ["Knows the Dodge maneuver"]
  },
  {
    name: "Spy",
    points: 2,
    limit: null,
    weapons: ["Simple", "Martial", "Ranged"],
    traits: [
      "If this model has cover from an attacker's point of view, the attacker does not have LoS unless they are within 1 stick of the Spy."
    ]
  },
  {
    name: "Spell Sword",
    points: 1,
    limit: 1,
    weapons: ["Simple", "Martial", "Ranged", "Shield"],
    traits: ["Can purchase 1 pt. spells."]
  },
  {
    name: "Swashbuckler",
    points: 2,
    limit: null,
    weapons: ["Simple", "Martial", "Ranged"],
    traits: [
      "Fencing swords are not weak.",
      "-1 reload for harquebus and pistolet."
    ]
  },
  {
    name: "Thief",
    points: 1,
    limit: null,
    weapons: ["Simple", "Ranged"],
    traits: [
      "Interact actions with scenario based objectives or terrain items cost 1 action.",
      "Any required rolls for a scenario or terrain based Interact action gain +D1 or +C1.",
      "-1 reload for 1–handed crossbows."
    ]
  },
  {
    name: "Wretch",
    points: 0,
    limit: null,
    weapons: ["Simple", "Ranged"],
    traits: [
      "Def, Mgt, and Will have a max of 2D6 or 2C.",
      "+2 Mgt with clubs, articulated clubs, fists, torches, and pitchforks."
    ]
  }
];

export {
  classes
}
