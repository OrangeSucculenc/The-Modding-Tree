addLayer("f", {
    name: "factories", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D45E37",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "factories", // Name of prestige currency
    baseResource: "concrete", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: "t",
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('f', 13)) mult = mult.times(upgradeEffect('f', 13))
        if (hasUpgrade('f', 23)) mult = mult.times(upgradeEffect('f', 23))
        if (hasUpgrade('f', 33)) mult = mult.times(upgradeEffect('f', 33))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Build factories", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 3,
		cols: 3,
        11: {
            title: "Efficient Factories I",
            description: "Doubles your concrete gain.",
            cost: new Decimal(3),
        },
        12: {
            title: "Coworker Support I",
            description: "Increases concrete gain based on the number of factories owned.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },
        13: {
            title: "Material Efficiency I",
            description: "Increases the number of buildable factories based on the amount of concrete owned.",
            cost: new Decimal(3),
            effect() {
                return player.points.add(1).pow(0.15)
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },



        21: {
            title: "Efficient Factories II",
            description: "Doubles your concrete gain.",
            cost: new Decimal(10),
        },
        22: {
            title: "Coworker Support II",
            description: "Increases concrete gain based on the number of factories owned.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },
        23: {
            title: "Material Efficiency II",
            description: "Increases the number of buildable factories based on the amount of concrete owned.",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(0.05)
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },



        31: {
            title: "Efficient Factories III",
            description: "Doubles your concrete gain.",
            cost: new Decimal(50),
        },
        32: {
            title: "Coworker Support III",
            description: "Increases concrete gain based on the number of factories owned.",
            cost: new Decimal(50),
            effect() {
                return player[this.layer].points.add(1).pow(0.01)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },
        33: {
            title: "Material Efficiency III",
            description: "Increases the number of buildable factories based on the amount of concrete owned.",
            cost: new Decimal(50),
            effect() {
                return player.points.add(1).pow(0.01)
            },        
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect        
        },        
    },
})
addLayer("t", {
    name: "reverse taxes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: 1
    }},
    color: "#EBD03B",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account, -----///// IN GAME TEXT SAYS FACTORIES BUT STILL USES CONCRETE FOR THE UNLOCK /////-----
    resource: "reverse taxes", // Name of prestige currency
    baseResource: "factories", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: un-pay taxes (yes this is technically tax evasion)", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 1,
		cols: 1,
        11: {
            title: "Efficient Factories I",
            description: "Doubles your concrete gain.",
            cost: new Decimal(3),    
        },        
    },
})