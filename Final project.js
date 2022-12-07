var play = 0;
var death;
var dead = false;
var start;
var respawn;
var pointCollide;
var score = 0;

var player = {
	x: 300,
	y: 200,
	speed: 20,
}

var enemy = {
	x: -20,
	y: -20,
	speed: 1,

}

var point = {
	x: 0,
	y: 0,
}

var resetPos = function() {
	player.y = 200;
	player.x = 300;
	enemy.x = -20;
	enemy.y = -29;
	point.x = random(10, 590);
	point.y = random(10, 390);
	player.speed = 20;
	enemy.speed = 1;
}

function mousePressed() {
	if (play === 0){
		play = 1;

	}
	
	if (play === 2){ 
		play = 1;
		score = 0;

	}
}

function setup() {
	createCanvas(600, 400);
	point.x = random(10, 590);
	point.y = random(10, 390);
}

function draw() {
	 background(255);
	player.speed = 20 + score / 4;
	enemy.speed = 1 + score / 4;
	gameplay();
	introScreen();
	
	function gameplay(){
	if (dead === true) {
		play = 2;
		dead = false;
		resetPos(); 

	}

	if (play === 1) {
		fill(249,145,39,98);
		strokeWeight(1);

		for (var i = 0; i < player.speed; i++) {
			death = collideCircleCircle(enemy.x, enemy.y, 40, player.x, player.y, 20);
			if (death === true) {
				dead = true;
			}

			fill(random(0, 255), random(0, 255), random(0, 255));
			ellipse(point.x, point.y, 10, 10);
			pointCollide = collideCircleCircle(player.x, player.y, 20, point.x, point.y, 10);
			if (pointCollide === true) {
				point.x = random(10, 590);
				point.y = random(10, 390);
				score += 1;
				
			}
			
			if (player.x > mouseX) {
				player.x -= 1
			}
			if (player.x < mouseX) {
				player.x += 1
			}
			if (player.y > mouseY) {
				player.y -= 1
			}
			if (player.y < mouseY) {
				player.y += 1
			}
		}

		fill(249,145,39,98);
		textSize(30);
		text("Score: " + score, 10, 30);
		ellipse(player.x, player.y, 20, 20);
		for (var q = 0; q < enemy.speed; q++) {


			if (enemy.x > player.x) {
				enemy.x -= 1;

			}
			if (enemy.x < player.x) {
				enemy.x += 1;

			}
			if (enemy.y > player.y) {
				enemy.y -= 1;

			}
			if (enemy.y < player.y) {
				enemy.y += 1;

			}

		}


		fill(254, 40, 33, 100);
		strokeWeight(4);
		stroke(163, 31, 31);
		ellipse(enemy.x, enemy.y, 40, 40);


	}
	}

function introScreen(){
if (play === 0) {
		stroke(0);
		fill(0);
		textSize(75);
		text("Play!", 210, 210);
		
	}
	
	if (play === 2) {
		textSize(50);
		strokeWeight(3);
		fill('red');
		text("U Suck ", 190, 100);
		fill(7, 186, 61);
		rect(175, 150, 220, 70);
		fill("blue");
		textSize(50);
		text("Restart.", 200, 200);
		fill("black");
		textSize(30);
		noStroke();
		text("You got: " + score + " point(s)", 190, 300)
	}
	
}
	
}