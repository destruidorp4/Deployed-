var player
var floor
var zombie
var bulletgroup

function preload() {

}





function setup() {
    createCanvas(1024, 600);
    player = createSprite(200, 425, 20, 70);
    player.shapeColor = "blue"
    floor = createSprite(0, 460, 1024 * 2, 10);
    zombie = createSprite(400, 425, 20,70)
    zombie.shapeColor = "green"
    bulletgroup = new Group()
}





function draw() {
    background("red");

    if (keyDown("d")) {
        player.x += 10
    }


    if(keyDown("a")){
        player.x -= 10
    }

    if(keyDown("w") && player.y > 350){
        player.velocityY = -10

    }
    player.velocityY += 0.8
    if(bulletgroup.collide(zombie)){
    zombie.destroy()
    //bullet.destroy()
    }
    player.collide(floor)
    drawSprites();
    mousePressed()
    
}

    function mousePressed(){
    if(keyDown("space")){
        var bullet = createSprite(player.x, player.y, 10,10)
    bullet.shapeColor = "yellow"
    bullet.velocityX = 10
    bulletgroup.add(bullet)
    }
    
    


    }