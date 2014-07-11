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
		contents:mapHolderMaker().setMap(Map.makeMap(6, 6, initTestMap)).build(),
		x:0,
		y:0,
		renderer:renderMap
	}
}



function renderPage(){
	for(var section in layout){
		ctx.drawImage(layout[section].renderer(layout[section].contents), layout[section].x, layout[section].y, layout[section].contents.width, layout[section].contents.height);
	}
}

setInterval(renderPage, 30);


function initTestMap(map){
	map.addUnit(0,0, makeUnit(0));

	map.addUnit(1,3, makeUnit(0));
	map.addUnit(3,2, makeUnit(0));
	//console.log(map.unitList[2].marker);
	map.selectUnit(map.unitList[2]);
	map.unitList[2].selected = true;
	//console.log(map.selectedUnitList);
	map.unitList[0].id = 0;
	map.unitList[1].id = 1;
	map.unitList[2].id = 2;
}

canvas.addEventListener("mouseup", function(e){
	  
    var x = Math.floor((e.pageX - this.offsetLeft));
    var y = Math.floor((e.pageY - this.offsetTop));

    for(var section in layout){
    	//console.log(x>=layout[section].x, x<layout[section].x+layout[section].contents.width, y>=layout[section].y, y<layout[section].y+layout[section].contents.height);
    	if(x>=layout[section].x && x<layout[section].x+layout[section].contents.width && y>=layout[section].y && y<layout[section].y+layout[section].contents.height){
    		layout[section].contents.processMouseClick(x, y);
    	}
    }
});
