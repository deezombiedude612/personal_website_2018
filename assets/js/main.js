if (document.querySelector("#year")) document.querySelector("#year").innerHTML = new Date().getFullYear();

// Reference: https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height
function vh(v) {
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (v * h) / 100;
}

function vw(v) {
	let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	return (v * w) / 100;
}

function vmin(v) {
	return Math.min(vh(v), vw(v));
}

function vmax(v) {
	return Math.max(vh(v), vw(v));
}

/**
 * Change Text in "View More" toggle button between "View More" and "View Less"
 * @param {*} buttonElement
 */
function viewButton(buttonElement) {
	if (buttonElement.target.innerText === "View More") buttonElement.target.innerText = "View Less";
	else buttonElement.target.innerText = "View More";
}
