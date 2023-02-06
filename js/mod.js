let modInfo = {
	name: "The blob War",
	id: "TheBlobWar",
	author: "patfr",
	pointsName: "blobs",
	modFiles: ["utils/borderRadius.js", "layers/bb.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0),
	offlineLimit: 0,
}

let VERSION = {
	num: "0.1 blob",
	name: "THE WAR HAS BEGIN *ANGRY BLOB*",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1 blob</h3><br>
		- Big Blobs.<br>
		- Added 1 Big Blob upgrade.
		- Endgame: 50 Big Blobs`

let winText = `The war is not over yet! It has still only just begun but sadly there is nothing more to do just yet...`

var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

function canGenPoints(){
	return true
}

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(tmp.bb.effect)
	return gain
}

function addedPlayerData() { return {
}}

var displayThings = [
	() => `You have ${format(tmp.bb.tanasinnsDebuff)} less effective TANASINNs`
]

function isEndgame() {
	return player.bb.points.gte(50)
}

var backgroundStyle = {

}

function maxTickLength() {
	return(3600)
}

function fixOldSave(oldVersion){
}