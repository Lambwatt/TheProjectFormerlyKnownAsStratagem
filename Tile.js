
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
	return this.tiles[x][y];
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
	return map;
}
