function TileCollection(){

	var tileCollection = {};
	tileCollection.tiles = [];

	tileCollection.addTile = addTile;
	tileCollection.removeTile = removeTile;
	tileCollection.containsTile = containsTile;
	tileCollection.clearTiles = clearTiles;
	tileCollection.printTiles = printTiles;
	tileCollection.allTiles = allTiles;

	return tileCollection;
}

function addTile(x, y){
	if(this.containsTile(x, y)) return false;

	this.tiles.push([x, y]);
	return true;
}

function removeTile(x, y){
	var replacementTiles = []
	for(var i in this.tiles){
		if(x != this.tiles[i][0] || y != this.tiles[i][1])
			replacementTiles.push(this.tiles[i]);
	}
	this.tiles = replacementTiles;
}

function containsTile(x, y){
	for(var i in this.tiles){
		if(x == this.tiles[i][0] && y == this.tiles[i][1]){
			console.log("returned true");
			return true;
		}
	}
	console.log("returned false");
	return false;
}

function clearTiles(){
	this.tiles = [];
}

function printTiles(){
	console.log(JSON.stringify(this.tiles));
}

function allTiles(){
	var contents = [];
	for(var i in this.tiles){
		contents.push({x:this.tiles[i][0], y:this.tiles[i][1]});
	}
	console.log(contents);
	return contents;
}

// var tiles1 = TileCollection();
// var tiles2 = TileCollection();
// tiles1.addTile(1,1);
// tiles2.addTile(2,2);
// tiles1.printTiles();
// tiles2.printTiles();

// tiles2.addTile(1,1);
// tiles2.addTile(1,2);
// tiles2.addTile(2,1);
// tiles2.addTile(2,2);
// tiles2.printTiles();

// tiles2.removeTile(1,2);
// tiles2.printTiles();
// tiles2.removeTile(2,1);
// tiles2.printTiles();

// tiles1.removeTile(1,1);
// tiles1.printTiles();


