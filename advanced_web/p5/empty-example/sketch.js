function setup(){
createCanvas(windowWidth, windowHeight);
//canvas.parent ('sketch-holder');
	}

function draw(){
	fill(255,0,0);
	ellipse(windowWidth, windowHeight, 50, 50); 
	if(mouseIsPressed){
		ellipse(mouseX,mouseY,50,50)
	}

	}