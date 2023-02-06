addLayer("bb", {
    name: "Big Blobs",
    symbol: "B",
    image: "resources/big-blob.png",
    nodeStyle: { "background-size": "cover" },
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FBC21B",
    colorCan: "#ffd559",
    requires: new Decimal(10),
    resource: "Big Blobs",
    baseResource: "Blobs",
    baseAmount() { return player.points },
    type: "normal",
    exponent() {
        let exp = 0.2
        if (hasUpgrade(this.layer, 11)) exp = 0.4
        return exp
    },
    tabFormat: {
        Blob: {
            content: [
                ["raw-html", () => `
                    You have <h2 style='color:${layers.bb.color};text-shadow:0 0 10px ${layers.bb.color}'>${formatWhole(player.bb.points)}</h2> <img src='resources/big-blob.png' width='24'><br>
                    which are multiplying <img src='resources/blob.png' width='24'>${tmp.bb.effect.gte(100) ? " (hardcapped at x100)" : ""} and<br>
                    less effective TANASINNs by ${formatWhole(tmp.bb.effect)}
                `],
                "blank",
                ["prestige-button", {
                    "background-image": "url('resources/big-blob.png')",
                    "background-position": "center right",
                    "background-repeat": "no-repeat",
                    "background-color": "#FBC21B",
                }],
                "blank",
                ["raw-html", () => `
                    You have ${format(player.points)} <img src='resources/blob.png' width='24'>`],
                "blank",
                "blank",
                "upgrades",
            ]
        }
    },
    upgrades: {
        11: {
            title: "Blob war",
            description: "Reduce Big Blob scaling",
            cost: new Decimal(10),
            style() { return componentBorderRadius(this.layer, "upgrades", this.id, 8) },
        },
        12: {
            title: "Bigger Army",
            description: "Quadruple Blob gain",
            cost: new Decimal(25),
            unlocked() { return hasUpgrade(this.layer, 11) || hasUpgrade(this.layer, this.id) || (tmp.bb.upgrades[13] ?? {}).unlocked },
            style() { return componentBorderRadius(this.layer, "upgrades", this.id, 8) },
        },
        13: {
            title: "Enemy energy",
            description: "Less effective TANASINNs (L.E.T) boost Big Blob gain",
            cost: new Decimal(100),
            tooltip: "Log10(Log10(Max(L.E.T, 10))) + 1",
            effect() { return tmp.bb.tanasinnsDebuff.max(10).log10().log10().add(1) },
            effectDisplay() { return `x${format(this.effect())}` },
            unlocked() { return hasUpgrade(this.layer, 12) || hasUpgrade(this.layer, this.id) || (tmp.bb.upgrades[14] ?? {}).unlocked },
            style() { return componentBorderRadius(this.layer, "upgrades", this.id, 8) },
        },
    },
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        { key: "b", description: "B: Reset for Big Blobs", onPress(){ if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true },
    effect() {
        let effect = new Decimal(1)
        effect = effect.mul(player.bb.points.add(1))
        return effect
    },
    glyphs() {
        let glyphs = new Decimal(player.points)
        glyphs = glyphs.div(2)
        return glyphs
    },  
    tanasinnsDebuff() {
        let tanasinns = new Decimal(0)
        tanasinns = tanasinns.add(tmp.bb.glyphs)
        return tanasinns
    },
})