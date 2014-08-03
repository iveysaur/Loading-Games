var current = 1;

function stop(){
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
}

