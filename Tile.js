
function isEmpty(){
	return unit==null;
}



function makeTile(){
	var tile = {};

	tile.unit = null; 
	return tile;
}

function makeUnit(){
	var unit = {hp:10, unit_class:test};
	return unit;
}

function getTile(x, y){
	if(x>0 && x<this.tiles.length && y>0 && y<this.tiles.height)
		return this.tiles[x][y];
	else
		return false;
}

function getTileInDirection(base_x, base_y, direction){
	var coords = {x:base_x, y:base_y};

	if(!this.getTile(coords.x, coords.y)){
		console.log("WARNING: recieved invalid start coordinates ["+base_x+", "+base_y+"]")
		return false;//
	}

	coords = getForwardStepInDirection(direction)(coords);

	if(!this.getTile(coords.x, coords.y))
		coords = getBackwardStepInDirection(direction)(coords);

	return this.getTile(coords.x, coords.y);
	
}

function getForwardStepInDirection(direction){
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

function getBackwardStepInDirection(direction){
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

function makeMap(x, y){
	var map = {width:x, height:y, tiles:[]};
	for(var i = 0; i<x; i++){
		map.tiles[i] = [];
		for(var j = 0; j<y; j++){
			map.tiles[i][j] = makeTile();
		}
	}

	map.getTile = getTile;
	map.getTileInDirection = getTileInDirection;


	return map;
}
