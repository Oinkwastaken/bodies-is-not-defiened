function setup(){
  createCanvas(400,400);
  player1 = new player(200,0,10,10)
}
function draw(){
  background(255,255,255);
  player1.display()
  drawSprites();		
  
}
