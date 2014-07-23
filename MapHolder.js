function mapHolderMaker(){
	this.mapData = {hor_sq:5, ver_sq:5};
	this.x = 0;//x on map
	this.y = 0;//y on map
	this.width = 48*5;//width on screen
	this.height = 48*5;//height on screen
	this.map = null;
	

	this.setMap = function(map){
		this.map = map;	
		return this;
	}

	this.setTilesShown = function(x, y){//This name is ambiguous should be set window size or something like that.
		this.mapData.hor_sq = x;
		this.mapData.ver_sq = y;

		return this;
	}

	this.setScreenDimensions = function(width, height){
		this.width = width ? width : this.width;
		this.height = height ? height : this.height;
		return this;
	}

	this.build = function(){
		var mapHolder = {
			map:this.map, 
			x:this.x,
			y:this.y, 
			width:this.width, 
			height:this.height, 
			hor_sq:this.mapData.hor_sq, 
			ver_sq:this.mapData.ver_sq, 
			sq_width:this.width/mapData.hor_sq,
			sq_height:this.height/mapData.ver_sq
		};

		mapHolder.scrolled = true;

		mapHolder.background = document.createElement('canvas');
		mapHolder.background.width = mapHolder.width;
		mapHolder.background.height = mapHolder.height;

		mapHolder.foreground = document.createElement('canvas');
		mapHolder.foreground.width = mapHolder.width;
		mapHolder.foreground.height = mapHolder.height;

		mapHolder.renderCanvas = document.createElement('canvas');
		mapHolder.renderCanvas.width = mapHolder.width;
		mapHolder.renderCanvas.height = mapHolder.height;

		mapHolder.processMouseClick = processMouseClick;
		mapHolder.unitsOnScreen = TileCollection();
		mapHolder.selectionsOnScreen = TileCollection();

		mapHolder.setMapWindow = setMapWindow;
		mapHolder.setMapWindow(0, 0);

		return mapHolder;
	}

	return this;
}

function setMapWindow(x, y){
	this.x = x;
	this.y = y;

	this.unitsOnScreen = [];
	for(var i = 0; i<this.hor_sq; i++){
		for(var j = 0; j<this.ver_sq; j++){
			var tile = this.map.getTile(x+i, y+j);
			if(tile.unit){
				this.unitsOnScreen.push({x:x+i, y:y+j, unit:tile.unit});
			}
		}
	}

	this.selectionsOnScreen = [];
	console.log(JSON.stringify(this.map.selectedTileList));
	var selections = this.map.selectedTileList.allTiles();
	console.log(JSON.stringify(selections));
	for(var i in selections){
		//var tile = this.map.getTile(x+i, y+j);
		if(selections[i].x >= this.x && selections[i].x < this.x + this.hor_sq 
			&& selections[i].y >= this.y && selections[i].y < this.y + this.ver_sq ){
			this.selectionsOnScreen.push(selections[i]);
			console.log("pushed"+selections[i]);
		}
	}
	//console.log(this.selectionsOnScreen);
}

function processMouseClick(x, y){
	
	var tile_x = Math.floor(x/this.sq_width) + this.x;
	var tile_y = Math.floor(y/this.sq_height) + this.y;
	var tile = this.map.getTile(tile_x, tile_y);
	if(tile.unit){ 
		this.map.selectUnit(tile_x, tile_y);
		this.setMapWindow(this.x, this.y);//Need proper refresh routine
	}
	console.log(this.selectionsOnScreen)
}