var button, current = 1;

window.addEventListener("load", function() {
	button = document.getElementById("stop");
});

function stop() {
	var ele = document.getElementById("spinner" + current);
	var computed = window.getComputedStyle(ele);
	if (computed) {
		var split = computed.transform.split(", ");
		var value = split[5].slice(0, -1);
		var next = Math.round(value/70);
		ele.style.webkitTransform = "translate(0, " + (next * 70) + "px)";
		ele.className = "column"
	}
	current++;
	if (current > 3) {
		button.innerHTML = "Restart";
		button.onclick = restart;
	}
}

function restart() {
	for (var i = 3; i > 0; i--) {
		var ele = document.getElementById("spinner" + i);
		ele.className = "column spinner"
	}
	current = 1;
	button.innerHTML = "Stop";
	button.onclick = stop;
}

