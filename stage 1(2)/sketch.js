var bg;
var ground,ground_img;
var spike1,spike2,spike3,spike4,spike5,spike_img;
var player,player_img,player_img2;

function preload(){
    bg = loadImage("images/brick wall.png")
    ground_img = loadImage("images/ground.png")
    spike_img = loadImage("images/spike.png")
    player_img = loadImage("images/main player 2.png")
    player_img2 = loadAnimation("images/main player 2.png","images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png","images/walk5.png")
}

function setup(){
    createCanvas (1043,575)

    ground = createSprite(522,560,1043,10)
    ground.addImage(ground_img)
    // ground.x=ground.width/2
    ground.scale=0.2

    spike1 = createSprite(220,550,90,50)
    spike1.addImage(spike_img)

    spike2 = createSprite(440,550,90,50)
    spike2.addImage(spike_img)

    spike3 = createSprite(660,550,90,50)
    spike3.addImage(spike_img)

    spike4 = createSprite(883,550,90,50)
    spike4.addImage(spike_img)

    player=createSprite(50,440,50,100)
    player.addImage(player_img)
    player.addAnimation("running",player_img2)
    player.scale=0.2


}

function draw(){
    background(bg);

    if (keyDown("space") && player.y>=362){
        player.velocityY=-12
        }
    player.velocityY+=0.8
    player.collide(ground)

    if (keyDown("a")){
        player.velocityX=-5
        player.changeAnimation("running",player_img2)
    // }else{
    //     player.velocityX=0
        // player.changeAnimation(player_img)

    }

    if (keyDown("d")){
        player.velocityX=5

    }else{
        player.velocityX=0

    }

    drawSprites();
}