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
	num: "0.3 blob",
	name: "EVEN BLOBIER ARMY *BLOB*",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3>v0.3 blob</h3><br>
		- Added 1 Big Blob upgrade.<br>
		- Added a hardcap to Big Blob effect on Blobs.<br>
		- Fixed some stuff.<br>
		- Endgame: 200 Big Blobs.<br>
	<br>
	<h3>v0.2 blob</h3><br>
		- Added 1 Big Blob upgrade.<br>
		- Endgame: 100 Big Blobs.<br>
	<br>
	<h3>v0.1 blob</h3><br>
		- Big Blobs.<br>
		- Added 1 Big Blob upgrade.<br>
		- Endgame: 50 Big Blobs<br>`

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
	gain = gain.mul(tmp.bb.effect.min(100))
	if (hasUpgrade("bb", 12)) gain = gain.mul(4)
	return gain
}

function addedPlayerData() { return {
}}

var displayThings = [
	() => `You have ${format(tmp.bb.tanasinnsDebuff)} less effective TANASINNs`
]

function isEndgame() {
	return player.bb.points.gte(200)
}

var backgroundStyle = {

}

function maxTickLength() {
	return(3600)
}

function fixOldSave(oldVersion){
}