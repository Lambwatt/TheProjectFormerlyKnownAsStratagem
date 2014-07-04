var Map = {};

function isEmpty(){
	return unit==null;
}

function getTile(x, y){
	if(x>0 && x<this.tiles.length && y>0 && y<this.tiles.height)
		return this.tiles[x][y];
	else
		return false;
}

Map.makeTile = function(){
	var tile = {};

	tile.unit = null; 
	return tile;
}

//This belongs elsewhere
function makeUnit(player){
	var unit = {hp:10, unit_class:"test", player:player};
	return unit;
}


function addUnit(x, y, unit){
	var unitMarker = {unit:unit, x:x, y:y, selected:false};
	this.tiles[x][y].unit = unitMarker;
	unit.marker = unitMarker;
	this.unitList.push(unit);
	console.log(this.unitList.length);
}

getTileInDirection = function(base_x, base_y, direction){
	var coords = {x:base_x, y:base_y};

	if(!this.getTile(coords.x, coords.y)){
		console.log("WARNING: recieved invalid start coordinates ["+base_x+", "+base_y+"]")
		return false;//
	}

	coords = Tile.getForwardStepInDirection(direction)(coords);

	if(!this.getTile(coords.x, coords.y))
		coords = Tile.getBackwardStepInDirection(direction)(coords);

	return this.getTile(coords.x, coords.y);
	
}

Map.getForwardStepInDirection = function(direction){
	switch(direction){
		case N:
			return function(coords){return{x:coords, y:coords-1}};
		case NE:
			return function(coords){return{x:coords+1, y:coords-1}};
		case E:
			return function(coords){return{x:coords+1, y:coords}};
		case SE:
			return function(coords){return{x:coords+1, y:coords+1}};
		case S:
			return function(coords){return{x:coords, y:coords+1}};
		case SW:
			return function(coords){return{x:coords-1, y:coords+1}};
		case W:
			return function(coords){return{x:coords-1, y:coords}};
		case NW:
			return function(coords){return{x:coords-1, y:coords-1}};
		default:
			return function(coords){return{x:coords, y:coords}};
	}
}

Map.getBackwardStepInDirection = function(direction){
	switch(direction){
		case N:
			return function(coords){return{x:coords, y:coords+1}};
		case NE:
			return function(coords){return{x:coords-1, y:coords+1}};
		case E:
			return function(coords){return{x:coords-1, y:coords}};
		case SE:
			return function(coords){return{x:coords-1, y:coords-1}};
		case S:
			return function(coords){return{x:coords, y:coords-1}};
		case SW:
			return function(coords){return{x:coords+1, y:coords-1}};
		case W:
			return function(coords){return{x:coords+1, y:coords}};
		case NW:
			return function(coords){return{x:coords+1, y:coords+1}};
		default:
			return function(coords){return{x:coords, y:coords}};
	}
}

Map.makeMap = function(x, y, mapInit){
	var map = {width:x, height:y, tiles:[]};
	for(var i = 0; i<x; i++){
		map.tiles[i] = [];
		for(var j = 0; j<y; j++){
			map.tiles[i][j] = Map.makeTile();
		}
	}

	map.getTile = getTile;
	map.getTileInDirection = getTileInDirection;
	map.unitList = [];
	map.addUnit = addUnit;

	mapInit(map);//Expect side effects.

	return map;
}
