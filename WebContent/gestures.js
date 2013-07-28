Leap.loop({
	enableGestures : true
}, function(obj) {
	if (obj.gestures.length > 0) {
		obj.gestures.forEach(function(gesture) {
			output(gesture);
		});
	}
});

var outputDiv = document.getElementById("output");
function output(gesture) {
	if (gesture.state == 'start') {
		$('#' + gesture.type).css('background-color', '#ff0000');
	} else if (gesture.state == 'stop') {
		$('#' + gesture.type).css('background-color', '#00ff00');
	}
	if (gesture.type == 'swipe') {

		var direction = gesture.direction[0] >= 0 ? 'left to right' : 'right to left';

		$('#swipe').html(
				'swipe<br/>X:' + gesture.direction[0] + 'Y:' + gesture.direction[1] + 'Z:'
						+ gesture.direction[2] + '<br/>' + direction);
	}
	if (gesture.type == 'screenTap' || gesture.type == 'keyTap') {
		$('#' + gesture.type).css('background-color', '#ff0000');
		setTimeout(function() {
			$('#' + gesture.type).css('background-color', '#00ff00');
		}, 200);
	}
	/*
	 * var div = document.createElement("div"); div.innerHTML =
	 * JSON.stringify(gesture) + "<br/>"; outputDiv.insertBefore(div,
	 * outputDiv.firstChild);
	 */
};

var circle = {
	"center" : [ -8.35835, 162.173, 52.877 ],
	"normal" : [ 0.549754, -0.034748, 0.834604 ],
	"progress" : 1.08131,
	"radius" : 57.2113,
	"id" : 831,
	"handIds" : [ 43 ],
	"pointableIds" : [ 47 ],
	"duration" : 1347543,
	"state" : "stop",
	"type" : "circle"
};
var keyTap = {
	"position" : [ -9.38897, 169.063, 55.731 ],
	"direction" : [ -0.141792, -0.988074, -0.0600328 ],
	"progress" : 1,
	"id" : 828,
	"handIds" : [ 43 ],
	"pointableIds" : [ 47 ],
	"duration" : 93555,
	"state" : "stop",
	"type" : "keyTap"
};
var screenTap = {
	"position" : [ -3.99414, 152.783, 33.5111 ],
	"direction" : [ 0.19501, -0.331286, -0.923158 ],
	"progress" : 1,
	"id" : 825,
	"handIds" : [ 43 ],
	"pointableIds" : [ 47 ],
	"duration" : 93556,
	"state" : "stop",
	"type" : "screenTap"
};
var swipe = {
	"startPosition" : [ -123.199, 111.351, 79.4682 ],
	"position" : [ -8.70678, 128.55, -2.90308 ],
	"direction" : [ 0.822251, 0.117758, -0.556809 ],
	"speed" : 1101.57,
	"id" : 821,
	"handIds" : [ 43 ],
	"pointableIds" : [ 95 ],
	"duration" : 9356,
	"state" : "update",
	"type" : "swipe"
};