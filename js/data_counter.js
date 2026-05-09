data_counter = [
    {
        title: "Blockade Maneuver",
        icon: "shield",
        subtitle: "Protect your allies by standing in the way.",
        description: "Protect your allies by standing in the way.",
        bullets: [
            "Action Cost: 1 Counter",
            "KP Cost: 2(T)",
            "Effect: If an Opponent uses a Movement Maneuver to enter the Melee Range of an Ally within your Normal Speed range, move that Opponent back up to 1/2 the squares they moved and place yourself adjacent to them."
        ]
    },
    {
        title: "Defend Maneuver",
        icon: "dodge",
        subtitle: "Defend yourself against dangerous attacks.",
        description: "Select one of the following effects when targeted by an attack:",
        bullets: [
            "Action Cost: 1 Counter",
            "Parry [0 KP]: Use Strike Roll instead of Dodge. Each Energy Charge/Power Shot on the attack reduces your score by 1(T).",
            "Direct Hit [0 KP]: Forgo Dodge. Increase Soak Value by +1/2. If 0 damage is taken from a heavy attack, attacker becomes Shaken.",
            "Power Flare [2(T) KP]: Forgo Dodge. Clash your Wound Roll against theirs. Ki Wager up to 1/5 Max Capacity. Win = 0 damage.",
            "Cross Counter [2(T) KP]: Defense Value is halved. After resolution, make a Basic Attack as an Out-of-Sequence Maneuver.",
            "Guard [8(T) KP]: Forgo Dodge. Wound Roll is halved and Damage Category is reduced by 1."
        ]
    },
    {
        title: "Duel Maneuver",
        icon: "crossed-swords",
        subtitle: "Fight back against an attack with your might!",
        description: "Initiate when targeted by a Signature Technique or high-charge attack.",
        bullets: [
            "Action Cost: 1 Counter",
            "KP Cost: Varies (Cost of the used Profile/Signature Technique)",
            "Process: Characters make 3 Duel Clashes (Force/Magic). Best 2-out-of-3 wins the Duel.",
            "Wager: Ki Wager up to 1/2 Max Capacity per clash. The winner adds the total Ki Wager of ALL participants to their Wound Roll.",
            "Power Duel: You may forgo an attack and contest with pure Might (0 KP). If you win, Wound is Might + total Ki Wagers."
        ]
    },
    {
        title: "Duel Escape Maneuver",
        icon: "run",
        subtitle: "That’s not a match you’ll win. Better to dip.",
        description: "Escape a Duel before it begins.",
        bullets: [
            "Action Cost: 1 Counter",
            "KP Cost: N/A",
            "Effect: Make an Impulsive Clash against the opponent. If you win, the Duel is avoided and your Action Cost is refunded (KP cost is still lost)."
        ]
    },
    {
        title: "Energy Cancel [1/Round]",
        icon: "cancel",
        subtitle: "Plans change. Change strategies immediately.",
        description: "Stop charging an attack to regain your freedom.",
        bullets: [
            "Action Cost: 1 Counter",
            "KP Cost: N/A",
            "Effect: Immediately lose all Energy Charges and stop suffering the penalties (Guard Down) of the Energy Charge Maneuver."
        ]
    },
    {
        title: "Exploit Maneuver",
        icon: "awareness",
        subtitle: "Punish openings.",
        description: "Make a reactive strike when an opponent leaves themselves open.",
        bullets: [
            "Action Cost: 1 Counter",
            "KP Cost: N/A",
            "Effect: Used when an effect provokes it (like moving out of Melee Range). Perform a Basic Attack Maneuver as an Out-of-Sequence Maneuver."
        ]
    },
    {
        title: "Intervene Maneuver",
        icon: "dark-squad",
        subtitle: "Step in the way of danger to help an ally!",
        description: "Help an ally within 8 squares who was hit by an attack.",
        bullets: [
            "Action Cost: 1 Counter",
            "Defense Wall: Move to intercept the attack and take the damage for your ally. Increase your Soak by 1/2 for this hit.",
            "Deflect: Move adjacent to the ally and make a Might Clash. If you win, the attack is negated. If you lose, you take the damage with +1 Damage Category.",
            "Distant Deflect [8(T) KP]: Make a Might Clash without moving. If you win, the attack is deflected away."
        ]
    },
    {
        title: "Reflect Maneuver",
        icon: "shield-reflect",
        subtitle: "Throw back an attack against an opponent!",
        description: "Counter-attack after a successful defensive move.",
        bullets: [
            "Action Cost: Out-of-Sequence",
            "KP Cost: 5(T)",
            "Effect: If you successfully Parry, Deflect, or Distant Deflect an Energy/Magic attack, roll Strike to hit an opponent with their own attack. They roll the Wound Roll against themselves."
        ]
    }
];