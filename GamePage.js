//window stuff
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

console.log(renderMap);

var layout = {
	map:{
		contents:mapHolderMaker().setMap(Tile.makeMap(6, 6)).build(),
		x:50,
		y:50,
		renderer:renderMap
	}
}

console.log(layout.map.renderer);


function renderPage(){
	for(var section in layout){
		ctx.drawImage(layout[section].renderer(layout[section].contents), layout[section].x, layout[section].y, layout[section].contents.width, layout[section].contents.height);
	}
}

setInterval(renderPage, 30);

