function renderMap(mapHolder){

	var mapCtx = mapHolder.renderCanvas.getContext("2d"); 
	mapCtx.clearRect(0, 0, mapHolder.width, mapHolder.height);
	//console.log(mapHolder.map);
	if(mapHolder.map==null)
		return document.createElement('canvas');

	if(mapHolder.scrolled){

		renderBackground(mapHolder);
		mapHolder.scrolled = false;
	}

	mapCtx.drawImage(mapHolder.background, 0, 0, mapHolder.width, mapHolder.height);
	//mapRenderCanvas//document.//mapHolder.background;

	renderUnits(mapHolder);
	mapCtx.drawImage(mapHolder.foreground, 0, 0, mapHolder.width, mapHolder.height);

	return mapHolder.renderCanvas;
}

function renderBackground(mapHolder){
	var ctx = mapHolder.background.getContext("2d");


	for(var i = 0; i<mapHolder.hor_sq; i++){
		for(var j = 0; j<mapHolder.ver_sq; j++){
			if((i+j)%2==0)
				ctx.fillStyle = "rgb(0,0,0)";
			else
				ctx.fillStyle = "rgb(200,0,0)";

			//get tile by location to asses terrain

			ctx.fillRect(mapHolder.sq_width*i, mapHolder.sq_height*j, mapHolder.sq_width, mapHolder.sq_height);
		}
	}
}

var playerColours = ["rgb(200,200,0)", "rgb(0,0,200)"];

function renderUnits(mapHolder){

	var ctx = mapHolder.foreground.getContext("2d");
	ctx.clearRect(0,0,mapHolder.foreground.width, mapHolder.foreground.height);

	var units = mapHolder.map.unitList;
	for(var i in units){

		//if unit is in view
		if(units[i].marker.x >= mapHolder.x && units[i].marker.x < mapHolder.x + mapHolder.hor_sq
			&& units[i].marker.y >= mapHolder.y && units[i].marker.y < mapHolder.y + mapHolder.ver_sq){
			if(units[i].selected){
				ctx.lineWidth = 5;
				ctx.strokeStyle = "rgb(0,200,0)";
				ctx.strokeRect(mapHolder.sq_width * (units[i].marker.x - mapHolder.x), mapHolder.sq_height * (units[i].marker.y - mapHolder.y), mapHolder.sq_width, mapHolder.sq_height);
			}

			ctx.fillStyle = playerColours[units[i].player];

			//draw unit
			ctx.fillRect(mapHolder.sq_width * (units[i].marker.x - mapHolder.x)+10, mapHolder.sq_height * (units[i].marker.y - mapHolder.y)+6,24,40);

			//console.log("drew unit with colour "+ctx.fillStyle);
		}
	}
}