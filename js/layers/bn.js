addLayer("bn", {
    name: "Blob No",
    symbol: "Bn",
    image: "resources/blob-no.png",
    position: 1,
    row: 1,
    displayRow: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FBC21B",
    colorCan: "#ffd559",
    requires: new Decimal(100000),
    resource: "Blob No",
    baseResource: "Blobs",
    baseAmount() { return player.points },
    type: "static",
    exponent() {
        let exp = 2
        return exp
    },
    tabFormat: [
        ["raw-html", () => `You have <h2 style='color:${layers.bn.color};text-shadow:0 0 10px ${layers.bn.color}'>${formatWhole(player.bn.points)}</h2> <img src='resources/blob-no.png' width='24'><br>
            boosting Big Blob gain by x${formatWhole(tmp.bn.effect)}
        `],
        "blank",
        ["prestige-button", {
            "background-color": "#FBC21B",
        }],
        "blank",
        ["raw-html", () => `You have ${format(player.points)} <img src='resources/blob.png' width='24'>`],
    ],
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    hotkeys: [
        { key: "y", description: "Y: Reset for Blob Yes", onPress(){ if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return hasUpgrade("bb", 15) || player.bn.unlocked },
    effect() {
        let effect = new Decimal(2)
        effect = effect.pow(player.bn.points)
        return effect
    },
})