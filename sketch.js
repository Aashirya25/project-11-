var boy,boyimg;
var road,roadimg;
var invisibleboundry,invisibleboundry2;
var bomb,bombImg;
var coin, coinimg;
var drink,drinkimg;
var score = 0;

function preload()
{
  //pre-load images
  boyimg = loadAnimation("Runner-1.png","Runner-2.png");
  roadimg = loadImage("path.png");
  bombimg = loadImage("bomb.png");
  coinimg = loadImage("coin.png");
  drinkimg = loadImage("energyDrink.png");
}


function setup()
{
  createCanvas(370,550);
  //create sprites here
  road = createSprite(175,200,20,20);
  road.addImage(roadimg);
  road.y = road.height/2;

  boy = createSprite(150,490,20,20);
  boy.addAnimation("boy",boyimg);
  boy.scale=0.07;

  invisibleboundry= createSprite (2,300,80,550);
  invisibleboundry.visible=false;
  invisibleboundry2= createSprite (380,300,80,550);
  invisibleboundry2.visible=false;

  bomb = createSprite(random(50,350),40,10,10)
  bomb.addImage(bombimg);
  bomb.scale = 0.08;
  bomb.velocityY = 3;
  
  coin = createSprite(random(50,350),40,10,10)
  coin.addImage(coinimg);
  coin.scale = 0.5;
  coin.velocityY = 3;

  drink = createSprite(random(50,350),40,10,10)
  drink.addImage(drinkimg);
  drink.scale = 0.08;
  drink.velocityY = 3;
}

function draw() 
{
  background(0);
  //create infinite background
  road.velocityY = 3;
  if(road.y>500)
  {
    road.y=height/2;
  }
  //Make the boy move left and right with the mouse
  boy.x=mouseX;
  //Keep the boy in the boundries
  boy.collide(invisibleboundry);
  boy.collide(invisibleboundry2);

  textSize (20);
  if (boy.isTouching(coin))
  {
    score = score+2;
    coin.remove();
  }
  else if (boy.isTouching(bomb))
  {
    score = score -1;
    bomb.remove();
  }
  if (boy.isTouching(drink))
  {
    score = score+5;
    drink.remove();
  }

drawSprites();
if (score>=20)
  {
    coin.remove()
    bomb.remove()
    drink.remove()
    coin.velovityY=0
    bomb.velocityY=0
    drink.velocitY=0
    textSize(50)
    text("YOU WON!",50,290)
  
  }
 text("Score: "+score,45,40);
 text("Collect the coins and energy drinks",45,80);
 text("avoid bombs",45,120);

 var sprite = Math.round(random(1,3));
  
  if (frameCount % 50 == 0)
  {
   if (sprite == 1)
  {
    createBomb();
  }
   else if (sprite == 2)
  {
    createCoin();
  }
   else
  {
     createDrink();
  }
}}

  function createBomb()
{
  bomb = createSprite(random(50,350),40,10,10);
  bomb.addImage(bombimg);
  bomb.scale = 0.08;
  bomb.velocityY = 3;
}

function createCoin()
{
  coin = createSprite(random(50,350),40,10,10);
  coin.addImage(coinimg);
  coin.scale = 0.5;
  coin.velocityY = 3;
 }

 function createDrink()
{
  drink = createSprite(random(50,350),40,10,10);
  drink.addImage(drinkimg);
  drink.scale = 0.09;
  drink.velocityY = 3;
 }