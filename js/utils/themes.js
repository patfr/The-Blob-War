// ************ Themes ************
var themes = ["default", "aqua", "blob"]

var colors = {
	default: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		split: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		split: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	blob: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		split: "#6b570a",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#4f4211",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
}
function changeTheme() {
	colors_theme = colors[options.theme || "default"];

	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--split', colors_theme["split"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index = (index + 1) % themes.length;
		options.theme = themes[index];
	}
	changeTheme();
	resizeCanvas();
}