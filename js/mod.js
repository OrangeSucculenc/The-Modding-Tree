let modInfo = {
	name: "The Concrete Tree",
	id: "ukskilogrammbetounikaheeuroeest",
	author: "OrangeSucculenc",
	pointsName: "concrete",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	
	offlineLimit: 12,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Actual Upgrades Edition",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3>v0.1 "Actual Upgrades Edition"</h3><br>
		- Added a few upgrades to factories.<br><br>
	<h3>v0.0 "Technically An Update"</h3><br>
		- Added concrete.<br>
		- Added factories.`

let winText = `Congratulations! You have aquired a monopoly over literally everything using only the power of concrete.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('f', 11)) gain = gain.times(2)
	if (hasUpgrade('f', 12)) gain = gain.times(upgradeEffect('f', 12))


	if (hasUpgrade('f', 21)) gain = gain.times(2)
	if (hasUpgrade('f', 22)) gain = gain.times(upgradeEffect('f', 22))


	if (hasUpgrade('f', 31)) gain = gain.times(2)
	if (hasUpgrade('f', 32)) gain = gain.times(upgradeEffect('f', 22))


	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}