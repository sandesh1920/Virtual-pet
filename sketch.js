var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feeddog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}

function draw() {
  background(46,139,87);
  fedTime=database.ref('FeedTime');
  feedTime.on("value",function(data){
    lastFed=data.val();
 });
  drawSprites();
}

//function to read food Stock
function feeddog(){
  dog.addImage(happyDog);

  if(fooodObj.getFoodStock()<=0){
    foodObj.getFoodStock(foodObj.getFoodStock()*0);

 }else{
   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}

}


//function to update food stock and last fed time
function addFoods(){
  FoodS++;
  database.ref('/').update({
    Food:foodS

     })
    }



//function to add food in stock
