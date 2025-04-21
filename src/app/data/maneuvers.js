const maneuvers = {
    Bellringer: {
      useWhen: "this model hits a target with this weapon.",
      effect: "Place a staggered token next to the target model. Do not roll on the Melee Attack Table."
    },
    Block: {
      useWhen: "a Ranged Attack is declared against the model wielding this weapon.",
      effect: "+D1 or +C1 to your Def roll."
    },
    Burst: {
      useWhen: "this model uses an Interact action.",
      effect: "Targets a point up to 1 stick from the attacker, Blast AOE, 2d8 Mgt."
    },
    Buttstroke: {
      useWhen: "this model is BtB with an enemy model.",
      effect: "Make a weak Melee Attack against the enemy model."
    },
    Cure: {
      useWhen: "this model uses an Interact action while BtB with a model in your warband.",
      effect: "Remove one condition or spell effect from the target model."
    },
    Distract: {
      useWhen: "a Melee Attack is declared against this model.",
      effect: "The attacking model suffers a -D1 or -C1 penalty to its Mgt roll."
    },
    Dodge: {
      useWhen: "A Ranged Attack has been declared on this model from it’s front arch and this model is ready.",
      effect: "This model may move up to 1 stick. This move must not bring the model BtB with an enemy model. Resolve the Ranged Attack if the enemy model still has LoS."
    },
    Drag: {
      useWhen: "this model hits a target with this weapon.",
      effect: "Move the target BtB with the attacker."
    },
    Empower: {
      useWhen: "this model casts a spell.",
      effect: "+D1 or +C1 to your Will roll."
    },
    Enhance: {
      useWhen: "this model uses an Interact action on a model in BtB contact.",
      effect: "The next roll this model makes gains +D1 or +C1."
    },
    Hasten: {
      useWhen: "you activate any model.",
      effect: "Raise this model’s Spd by 1 for this activation, to a maximum of 3.",
      universal: true,
    },
    Inspire: {
      useWhen: "this model takes an Interact action.",
      effect: "All allied models within 1 stick gain +1 to all Def, Mgt, and Will rolls until the next round."
    },
    MagicShield: {
      useWhen: "a Melee or Ranged Attack is declared against a model wielding this weapon.",
      effect: "Roll this model’s Will instead of Def against this attack."
    },
    Martyr: {
      useWhen: "This model takes an Interact action and is equipped with a Flamer or an RPG. Ignore aim requirement.",
      effect: "This model makes an Attack Action with Blast AoE centered on the model, roll 2D8 or 3C. This model is also affected by the Blast."
    },
    MovingTarget: {
      useWhen: "An enemy model takes a Move action and is in LoS of this model at any point, and this model is Ready.",
      effect: "This model may immediately take a Shoot Attack action with -D1 or -C1 against the moving enemy model. If the enemy model becomes Down or Staggered the movement is not completed. Ignore Aim requirement."
    },
    Parry: {
      useWhen: "a Melee Attack is declared against the model wielding this weapon.",
      effect: "+D1 or +C1 to your Def roll."
    },
    Pounce: {
      useWhen: "this model takes its 2nd or 3rd Move action, ends the Move >1 stick from where it started and also BtB with an enemy model.",
      effect: "Place the enemy model down."
    },
    Prognosticate: {
      useWhen: "before any player makes a roll.",
      effect: "Add +D1 or +C1 or -D1 or -C1 to the roll."
    },
    Rally: {
      useWhen: "this model uses an Interact action when your warband is broken.",
      effect: "Your warband is no longer broken."
    },
    Regroup: {
      useWhen: "you have Maneuver Points left in the Maintenance Phase.",
      effect: "Gain +D1 or +C1 to your next Initiative roll.",
      universal: true,
    },
    Repel: {
      useWhen: "this model takes an Interact action.",
      effect: "All BtB models must move 1 stick away from this model, but not BtB with any other model in your warband."
    },
    Riposte: {
      useWhen: "this model is still ready and BtB with its attacker after being the target of a Melee Attack action.",
      effect: "Make a Melee Attack against the attacker."
    },
    Set: {
      useWhen: "an enemy model that started its activation more than 1 stick away moves BtB with this model.",
      effect: "Immediately make a Melee Attack against the enemy model with this weapon."
    },
    Shove: {
      useWhen: "This model takes an Interact action and is BtB with an enemy model.",
      effect: "Make an unopposed Mgt Roll. If successful, move the target BtB enemy model up to 1 stick."
    },
    Smash: {
      useWhen: "this model takes a Melee Attack action using this weapon.",
      effect: "+D1 or +C1 to your Mgt roll."
    },
    Sweep: {
      useWhen: "this model takes a Melee Attack action using this weapon.",
      effect: "Make an attack against every model BtB with this model."
    },
    Taunt: {
      useWhen: "this model takes an Interact action.",
      effect: "Enemy models within 1 stick take a -1 penalty to all Def, Mgt, and Will rolls until the next round."
    },
    Throw: {
      useWhen: "this model hits a target with this weapon.",
      effect: "The attacker places the target model down anywhere within 1 stick. Do not roll on the Attack Result Table."
    },
    Trample: {
      useWhen: "this model takes a Melee Attack action.",
      effect: "Make a 2d8 Mgt Melee Attack against every model within a ½ stick of the attacking model."
    },
    WeakSpot: {
      useWhen: "this model hits a target with this weapon.",
      effect: "+1 to the Attack Result Table roll."
    }
  };
  