//window stuff
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var layout = {
	map:{
		contents:mapHolderMaker().setMap(Tile.makeMap(6, 6)).build(),
		x:0,
		y:0,
		renderer:renderMap
	}
}

console.log("in main", layout.map.contents.background);


function renderPage(){
	for(var section in layout){
		//console.log("blankitude", layout.map.contents.background);
		//console.log(layout[section].renderer(layout[section].contents));
		console.log(layout[section].x, layout[section].y, layout[section].contents.width, layout[section].contents.height);
		ctx.drawImage(layout[section].renderer(layout[section].contents), layout[section].x, layout[section].y, layout[section].contents.width, layout[section].contents.height);
	}
}

//setInterval(renderPage, 30);
renderPage();

