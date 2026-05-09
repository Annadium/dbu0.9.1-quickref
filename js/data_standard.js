data_standard = [
    {
        title: "Aura Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Activate an Aura",
        description: "Engulf your body in ki, granting the powers of a specialized aura.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: Varies (each Aura will have their own KP Cost – that is the KP Cost you pay for this Maneuver)",
            "Effect: Activate an Aura you have access to. At the start of each of your turns when an Aura is active, you must pay 1/2 of the KP Cost or deactivate that Aura."
        ]
    },
    {
        title: "Basic Attack Maneuver",
        icon: "crossed-swords",
        subtitle: "Make a basic, unnamed attack.",
        description: "Make a basic, unnamed attack.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: Varies (uses the Ki Point Cost of the chosen Profile)",
            "Effect: Target an Opponent with an Attacking Maneuver using a Profile (see – Attacking) of your choice. If the Profile has an Area of Effect, use that to select the target(s) instead. You can only use each Profile once per Combat Round when using a Basic Attack Maneuver, except for the Simple, Sphere and Spell Profiles."
        ]
    },
    {
        title: "Combat Recovery [1/Round]",
        icon: "juggler",
        subtitle: "Recover as much stamina as possible.",
        description: "Talk or rest to recover as much stamina as possible.",
        bullets: [
            "Action Cost: Variable (minimum 2 Actions)",
            "KP Cost: N/A",
            "Effect: Decide how many Actions you spend (minimum 2). For each Action spent, reduce Defense Value by 1(T) until next turn and regain 1d10(bT) Life and Ki Points. Triggers Exploit Maneuver for Opponents within 8 Squares; if hit by an Exploit Attacking Maneuver, you lose regained Life Points.",
            "Condition Recovery: When using this, forgo Life Points to make a Steadfast Check. On success, remove DOT or a Combat Condition stack. Fails automatically if hit by an Exploit Maneuver.",
            "Spectate: After recovering, you can spend remaining Actions (minimum 1) to enter the Spectator Special State."
        ]
    },
    {
        title: "Command [1/Round]",
        icon: "juggler",
        subtitle: "Control your Minions!",
        description: "Control your Minions by granting them actions.",
        bullets: [
            "Action Cost: Variable",
            "KP Cost: N/A",
            "Effect: For each Action spent, target 1 Minion: they gain 2 Actions for their next turn. Max 2 Actions per Minion at a time, cannot target the same Minion twice until the start of your next turn."
        ]
    },
    {
        title: "Empower [1/Round]",
        icon: "juggler",
        subtitle: "Send your power to an ally!",
        description: "Send your power to an ally!",
        bullets: [
            "Action Cost: Variable",
            "KP Cost: N/A",
            "Effect: For each Action spent, transfer up to 2x your Might in Ki Points to an Ally (double if in Melee Range). Consumes an equal amount of your Capacity Rate.",
            "Miracle Empowerment: Suffer a Fatigued stack to increase target's Tier of Power Extra Dice by 1 category until end of their next turn. Treat yourself as in Melee Range regardless of distance."
        ]
    },
    {
        title: "Energy Charge Maneuver",
        icon: "juggler",
        subtitle: "Charge up an attack.",
        description: "Charge up your energy into a single, high-power attack.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: 2(bT)",
            "Effect: Declare an Attacking Maneuver to gain an Energy Charge. Successive uses of this maneuver add more charges to the declared attack.",
            "Penalty: Until the attack is used, you suffer the Guard Down Combat Condition and cannot use any other Attacking Maneuver, Unique Ability (unless Instant), or the Movement Maneuver."
        ]
    },
    {
        title: "Grapple Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Grab an Opponent.",
        description: "Beyond just punching people, grabbing an Opponent is a valid option too.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Make a Grapple Check (Strike vs Strike/Dodge) against an Opponent in Melee Range. Win: Grapple starts. Lose: Provoke Exploit Maneuver.",
            "Grapple Penalty: Both characters suffer Guard Down and cannot remove it.",
            "Ending/Escaping: Grappler can end as an Instant Maneuver. Grappled rolls a Grapple Check at the start of their turn to escape.",
            "Movement: Moving requires a Might Clash against the other character.",
            "Pulled In: Grappler can make a Might Clash to pull Grappled into an adjacent square.",
            "Tail Restraint: Take a 2(T) penalty to grab a tail, preventing Tail Attack Maneuvers."
        ]
    },
    {
        title: "Launch Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Throw a held character.",
        description: "Throw a character you are holding.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Make a Grapple Check against a Grappled Opponent. Win: End the Grapple and move them up to your Might in Squares in any direction. Lose: They escape the Grapple."
        ]
    },
    {
        title: "Movement Maneuver",
        icon: "juggler",
        subtitle: "Get from point A to point B.",
        description: "Getting from point A to point B as fast as possible.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Move up to your Boosted Speed. Past Normal Speed costs 3 Ki Points per Square. Leaving Melee Range provokes the Exploit Maneuver. If damaged by Exploit, movement stops.",
            "Rapid Movement: Pay 2(bT) Ki to increase Strike Rolls by 1(T) until end of turn and Dodge Roll against Exploit Maneuvers by 1(T)."
        ]
    },
    {
        title: "Pin Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Prevent escape!",
        description: "Pin your Opponents, preventing escape!",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: If you are the Grappler, make a Might Clash. Win: They gain the Pinned Combat Condition. Lose: They escape the Grapple."
        ]
    },
    {
        title: "Power Up Maneuver [2/Round]",
        icon: "juggler",
        subtitle: "Push limits!",
        description: "Concentrate your power and push it to its limits!",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Gain a stack of Power until the end of your next turn (max 2 stacks). Each stack increases Maximum Capacity by 1/4 and Combat Rolls by 1(T)."
        ]
    },
    {
        title: "Signature Technique Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Use a Signature Technique!",
        description: "Blast an Opponent away with a Signature Technique!",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: Varies (each Signature Technique will have their own KP Cost)",
            "Effect: Make an Attacking Maneuver using a Signature Technique you have access to."
        ]
    },
    {
        title: "Throw Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Throw an object.",
        description: "Throw an object you have on your person or in your hands.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Throw an item any number of Squares in a straight line. Counts as an Attacking Maneuver of the Simple Profile. Increases damage by Hardness Value but reduces Strike Roll by 1(bT) (or 2(bT) at Long Range).",
            "Weapon Note: Do not apply Weapon Qualities unless it possesses the Throwing Weapon Quality.",
            "Ki Wager limit: Max 1/4 of your Ki Points."
        ]
    },
    {
        title: "Thrust Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Knock an Opponent off-balance.",
        description: "You strike an Opponent to knock them off-balance or blow them away.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Clash (Strike vs Strike/Dodge) in Melee Range. If you win, choose Push Back or Knock Prone.",
            "Push Back: Move them 1/2 your Might in Squares away. Double Collision Damage, reduce their Collision avoidance checks by 1(bT).",
            "Knock Prone: Make a Might Clash. Win: They are Prone. Lose: They suffer Guard Down against the next attack."
        ]
    },
    {
        title: "Toss Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Give an item to an ally.",
        description: "Give an item to a friend or ally.",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Toss an item to another Character. They must pass an Apprentice Perception Skill Check to catch it. Failure means the item sails past and becomes lost, requiring a Perception Check to find."
        ]
    },
    {
        title: "Transformation Maneuver",
        icon: "juggler",
        subtitle: "Enter a Transformation!",
        description: "Enter a Transformation!",
        bullets: [
            "Action Cost: 1 Action",
            "KP Cost: N/A",
            "Effect: Roll the Stress Test for a Transformation you meet the Tier of Power Requirements for. If you match or exceed it, you enter the Transformation and apply entry effects (like Legend Realized and Burst Limit)."
        ]
    }
];