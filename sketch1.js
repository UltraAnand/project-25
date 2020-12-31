		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;
		var once = true;


		function setup() {
			createCanvas(800, 700);


			engine = Engine.create();
			world = engine.world;
			ground = new Ground(width / 2, 695, width, 5)
			paperObject = new Paper(100,665,70)
			let X = width / 2
			let G = 690
			side1 = new Bin2(X, G - 50, 20, 100)
			side2 = new Bin2(X + 220, G - 50, 20, 100)
			binCenter = new Bin(X + 110, G - 10, 200, 20)


			Engine.run(engine);

		}


		function draw() {
			background("255, 204, 0");
			rectMode(CENTER);
			

			drawSprites();
			ground.display();
			paperObject.display();
			side1.display();
			side2.display();
			binCenter.display();
			
			
		}



		function keyPressed() {
			if ((keyCode === UP_ARROW) && (once == true)) {
				
					Matter.Body.applyForce(paperObject.body, paperObject.body.position, {
						x: 90,
						y: -90	
					});
					once = false;
				}
		}