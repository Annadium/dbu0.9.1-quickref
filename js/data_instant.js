data_instant = [
    {
        title: "Called Shot [1/Round]",
        icon: "juggler",
        subtitle: "Target specific weaknesses.",
        description: "A unique type of Maneuver that allows you to target specific weaknesses.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: 2(T)",
            "Effect: At Attack Declaration, when making an Attacking Maneuver that does not have an Area of Effect, you can use this Maneuver and spend 1 Action to increase the Damage Category of that Attacking Maneuver by 1 but decrease the Strike Roll for that Attacking Maneuver by 2(T).",
            "State the specifics of the targeted area for this Attacking Maneuver. Your ARC may, by their own discretion, apply a Combat Condition or reduce the abilities of an Opponent in response to your Attacking Maneuver in a way that they think fits – if you successfully deal Damage."
        ]
    },
    {
        title: "No Effort Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Anything incredibly easy to do.",
        description: "Anything incredibly easy to do, taking almost no time.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: N/A",
            "Effect: This Maneuver covers a lot of different effects which can only be used during your turn, which are listed below:",
            "Dynamic. Anything that’s not covered here, your ARC may declare requires a No Effort Maneuver, such as attempting to talk to an Opponent for a length of time that exceeds typical combat banter but does not quite reach the level of a Combat Recovery.",
            "Un/Sheathing a Weapon. Put away or draw a weapon.",
            "Replace a Weapon. Replacing a Weapon you are holding with another Weapon you possess.",
            "Drop/Pickup. Dropping or picking up an object.",
            "Cancel Energy Charge. Stop suffering from the effects of the Energy Charge Maneuver, but you lose all gathered Energy Charges from your chosen Attacking Maneuver."
        ]
    },
    {
        title: "Revert Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Return to your base form.",
        description: "Release a transformed state and return to your base form.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: N/A",
            "Effect: Exit a Transformation of your choice. You can use this effect to exit all Transformations simultaneously, but if you do, you suffer from Stress Exhaustion until the end of your turn. You do not suffer Stress Exhaustion from this effect if you were only in a single Transformation and that Transformation had either the Strainless or Natural Aspect when you used the Revert Maneuver. Halve the amount of Ki points lost through the effects of the Stress Exhaustion Combat Condition if gained through the effects of the Revert Maneuver."
        ]
    },
    {
        title: "Surge Maneuver [1/Encounter]",
        icon: "juggler",
        subtitle: "Gather yourself and recover.",
        description: "Gather yourself and recover.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: N/A",
            "Effect: Use either a Healing Surge or a Power Surge (see — Surges)."
        ]
    },
    {
        title: "Terrain Lift Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Tear up the ground.",
        description: "Tear up the ground.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: N/A",
            "Effect: Make a Force Ability Check while in the Standard Environment with a Target Number decided based on the Hardness of the ground or a Feature in your Melee Range (see below). You cannot use this effect if the Hardness Value is below 1. If you succeed, you carry the Feature (if you lifted a piece of the ground, it becomes a Feature that occupies a single Square).",
            "Target Number. A Hardness Value of 1 has a Target Number of 6. Increase the Target Number by 4 for each level of Hardness after the first.",
            "Shielding. If you are hit by an Attacking Maneuver while carrying a Feature, reduce the Dice Score of the Wound Roll when calculating your Damage by 5x the Hardness value of the Feature. If this would not reduce the Damage to 0, the Feature is destroyed. If the Feature isn’t destroyed, reduce the reduction by the Hardness Value each time this effect is applied.",
            "Placing. You can put down a Feature you are carrying in any Square within your Melee Range."
        ]
    },
    {
        title: "Triggered Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "Delay your Maneuvers.",
        description: "A unique type of Maneuver that allows you to delay your Maneuvers.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: N/A",
            "Effect: When making any type of Maneuver, you may use this Maneuver to delay its use but pay the Action Cost and KP Cost immediately. When you do, you must select a trigger. If that trigger occurs before the start of your next turn, you may use that Maneuver without paying the Action Cost or KP Cost as an Out-of-Sequence Maneuver. Below is the list of triggers:",
            "Damage: Select a Character. If that Character receives Damage, use your chosen Maneuver.",
            "Movement: Select a Character. If that Character would use any effect to move, use your chosen Maneuver before they move.",
            "Attack: Select a Character. If that Character uses an Attacking Maneuver, use your chosen Maneuver before that Attacking Maneuver is used.",
            "Turn End: Select an ally. Once that Character’s turn ends, use your chosen Maneuver.",
            "Combat Condition: Select an Opponent and a Combat Condition. If the Opponent gains your selected Combat Condition, immediately use your chosen Maneuver.",
            "When using the Triggered Maneuver to delay a Maneuver, you provoke the Exploit Maneuver for any Opponent within a Sphere AoE centered on you. If you take Damage from an Attacking Maneuver used through the Exploit Maneuver in response to this Maneuver, you do not gain the effects of the Triggered Maneuver and do not use the selected Maneuver but you gain a number of Counter Actions equal to the Action Cost spent."
        ]
    },
    {
        title: "United Attack Maneuver [1/Round]",
        icon: "juggler",
        subtitle: "A team attack with all you’ve got.",
        description: "A team attack with all you’ve got.",
        bullets: [
            "Action Cost: Instant",
            "KP Cost: Varies (equal to the cost of the Profile or Signature Technique used)",
            "Effect: When an ally uses an Attacking Maneuver or Duel Maneuver while you are on an adjacent Square, you may spend 1 Action and the Ki Points as if making the same Profile of Attacking Maneuver as your ally. Apply the following effects to their Attacking Maneuver or Duel Maneuver:",
            "Additional Power. Increase their Wound Roll by 1/2 of your relevant Attribute Modifier (Force for if they made a Physical or Energy Attack and Magic for if they made a Magic Attack) or 1/4 if they are engaging in a Duel Maneuver.",
            "Advantages. If you are using a Signature Technique, you may apply up to 1(bT) ranks of Advantages you possess on your Signature Technique to their Attacking Maneuver.",
            "Wager. You can Ki Wager up to 1/4 of your Max Capacity on this Attacking Maneuver or up to 1/10th of your Max Capacity on each roll if they are engaging in a Duel Maneuver.",
            "If your Ally would lose the Duel Maneuver when you used the United Attack Maneuver to join, you are also considered a target for the Attacking Maneuver."
        ]
    }
];