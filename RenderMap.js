function renderMap(mapHolder){

	//console.log(JSON.stringify(mapHolder));

	if(mapHolder.scrolled){
		//console.log("render map", mapHolder.background);
		renderBackground(mapHolder);
		mapHolder.scrolled = false;
	}
	var canvas = mapHolder.background;

	// console.log("in render map before return", mapHolder.background);
	//call the unit renderer

	return canvas;
}

function renderBackground(mapHolder){
	//var canvas = document.getElementById("canvas");
	//console.log("render back", typeof(mapHolder.background));
	var ctx = mapHolder.background.getContext("2d");
	console.log(ctx.canvas);
	//ctx.canvas.width = 240;
	//ctx.canvas.height = 240;
	console.log(ctx.canvas);

	for(var i = 0; i<mapHolder.hor_sq; i++){
		for(var j = 0; j<mapHolder.ver_sq; j++){
			if((i+j)%2==0)
				ctx.fillStyle = "rgb(0,0,0)";
			else
				ctx.fillStyle = "rgb(200,0,0)";

			//get tile by location to asses terrain

			console.log("drew rect with "+ctx.fillStyle);
			//console.log(mapHolder);
			console.log(mapHolder.sq_width*i, mapHolder.sq_height*j, mapHolder.sq_width, mapHolder.sq_height);
			ctx.fillRect(mapHolder.sq_width*i, mapHolder.sq_height*j, mapHolder.sq_width, mapHolder.sq_height);
		}
	}
	//return mapHolder.background;
}

function renderUnits(mapHolder){

}