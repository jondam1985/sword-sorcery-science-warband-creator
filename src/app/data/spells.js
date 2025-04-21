const spells = {
    "Blur": "Target one allied model within LoS. Until the spellcaster activates again, enemy models do not have LoS to this model unless they are within 1 stick of it.",
    "Charm": "Targeted enemy takes one action of the spellcaster's choice.",
    "Fearful Visage": "Target one allied model within LoS. Until the spellcaster activates again, enemy models must win a Will roll vs. this model to move BtB.",
    "Fireball": "Target a point within 1 stick. Affects a Blast AoE. Roll on the Ranged Attack column of the Attack Result Table for each target affected. Treat any result of less than 5 as 5.",
    "Grasping Vines": "Target 1 enemy model within LoS. Until the spellcaster activates again, that model's Spd is reduced by 1, or by 2 if the spellcaster's roll was greater or equal to double the target's.",
    "Holy Aura": "Until the end of the round, the caster emits holy energy that grants allied models within a 1 stick to reroll 1's on Def, Mgt, and Will rolls.",
    "Ice Blast": "Targets a Cone AoE. Roll on the Ranged Attack column of the Attack Result Table for each target affected. Treat any result of less than 5 as 5.",
    "Lightning Bolt": "Affects all models in a Line AoE. Models > 1 stick away gain +tDT to their Will roll. Roll on the Ranged Attack column of the Attack Result Table for each target affected. Treat any result of less than 5 as 5.",
    "Magic Missile": "Target 1 enemy model within LoS. Roll on the Ranged Attack column of the Attack Result Table. Treat a result of less than 5 as 5.",
    "Sleep": "Target 1 enemy model under 20 pts. within 1 stick. That model is staggered and down.",
    "Smite": "Target one allied model within 1 stick. The next time this model rolls on the Attack Result Table, add +1 to result with a success, or +2 if the caster doubled the Unopposed roll.",
    "Smoke Cloud": "Place a token within LoS of the spellcaster. LoS cannot be drawn through a ½ stick radius of this point. Remove the token when the spellcaster next activates.",
    "Telekinesis": "Move 1 obstacle or model (opposed roll when enemy) up to 1 stick.",
    "Teleport": "Target 1 allied model within LoS. Place that model anywhere on the board, but not BtB with an enemy model. Carried treasure or other objectives may not be teleported.",
    "Unlife": "Return 1 OoA model to the table and place it within 1 stick of the spellcaster. The returned model becomes a member of the spellcaster's warband with the stats of a Zombie, but only 2 actions per activation instead of 3 (p 3). A model can only be returned to the table once."
  };

  export {
    spells,
  }