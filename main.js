canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

canvas_width = 800;
canvas_height = 400;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = background_image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = 	greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag,0,0,canvas_width,canvas_height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_ImgTag, greencar_x,greencar_y ,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
		}
	
		if(keyPressed == '40')
		{
			down();
		}
		
		if(keyPressed == '37')
		{
			left();
		}
	
		if(keyPressed == '39')
		{
			right();
		}
		
		
}

function up()
{
	greencar_y = greencar_y - 10
	uploadBackground()
	uploadgreencar()
}

function down()
{
	greencar_y = greencar_y + 10
	uploadBackground()
	uploadgreencar()	
}

function left()
{
	greencar_x = greencar_x -10
	uploadBackground()
	uploadgreencar()
}

function right()
{
	greencar_x = greencar_x + 10
	uploadBackground()
	uploadgreencar()
}
