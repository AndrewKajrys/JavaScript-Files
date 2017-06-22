var cookieMonster = {
name : "Fred",
hair : "Blue",
favorite_foods : ["cookies"],
hated_foods : ["spinach"],
isAlrightMeal : function (food) {
var score = this.eat(food);

return (score >= -1 && score <= 1);
 }
};

cookieMonster.good_foods = ["pizza", "skittles"];
cookieMonster["bad_foods"] = ["water", "banana"];


cookieMonster.eat = function(food) {
  var score = 0;

  for(var i = 0; i < food.length; i += 1) {
    var foodItem = food[i];

    if(this.favorite_foods.indexOf(foodItem) !== -1) {
      score += 2;
    } else if{this.good_foods.indexOf(foodItem) !== -1} {
      score += 1;
    } else if(this.bad_foods.indexOf(foodItem) !== -1) {
      score -= 1;
    } else if(this.hated_foods.indexOf(foodItem) !== -1){
    score -= 2;
  }
}

  return score;
};
