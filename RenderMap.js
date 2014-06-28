function renderMap(mapHolder, x, y){
	if(mapHolder.scrolled){
		mapHolder.background = renderBackground(mapHolder);
	}
	var canvas = mapHolder.background;

	//call the unit renderer

	return canvas;
}

function renderBackground(mapHolder){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	for(var i = 0; i<mapHolder.hor_sq; i++){
		for(var j = 0; j<mapHolder.ver_sq; j++){
			if((i+j)%2==0)
				ctx.fillColor = "rgb(0,0,0)";
			else
				ctx.fillColor = "rgb(200,0,0)";

			//get tile by location to asses terrain

			ctx.fillRect(mapHolder.sq_width*i, mapHolder.sq_height*j, mapHolder.sq_width, mapHolder.sq_height);
		}
	}
	return canvas;
}

function renderUnits(mapHolder){

}