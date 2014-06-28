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

	this.setTilesShown = function(x, y){
		this.mapData.hor_sq = x;
		this.mapData.ver_sq = y;
		return this;
	}

	this.setScreenDimensions = function(width, height){
		this.width = width ? width : this.width;
		this.height = height ? height : this.height;
		return this;
	}

	// this.confirmMapDimensions(){
	// 	if(this.map.width/this.width < this.mapData.hor_sq){
	// 		this.mapData.hor_sq = this.map.width;
	// 	}
	// 	if(this.map.height/this.height < this.mapData.ver_sq){
	// 		this.mapData.ver_sq = this.map.height;
	// 	}
	// }

	this.build = function(){
		var mapHolder = {
			map:this.map, 
			x:this.x,
			y:this.y, 
			width:this.width, 
			height:this.height, 
			hor_sq:this.mapData.hor_sq, 
			ver_sq:this.mapData.ver_sq, 
			sq_width:this.width/this.hor_sq,
			sq_height:this.height/this.ver_sq
		};
		mapHolder.scrolled = true;
		mapHolder.background = null;

		return mapHolder;
	}

	return this;
}

function processMouseClick(x, y){
	return map.getTile(Math.floor(x/this.hor_sq) + this.x, Math.floor(y/this.ver_sq) + this.y);
}