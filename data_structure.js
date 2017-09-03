//add horse colors
var horse_color = ["navy blue", "golden yellow", "rose pink", "princess purpule"]; 

// add names to horses
var horse_name = ["mickey", "ponny","dorry","nemo"];

//add new color
horse_color.push("dimond rainbow");
// add new name
horse_name.push("troll");  

// create objects
//object should be horse names
// and the values should be colors

var horse = {};
var name;
var color;
var number;

for (i = 0; i < horse_color.length; i++){
  number = Math.floor((Math.random() * 5));
  name = horse_name[i];
  color = horse_color[number];
  horse[name] = color;
}
function Car(brand,model,year_release){
	this.brand = brand; 
	this.model = model;
	this.mpg = mpg;

this.performance = function() {
	if (mpg > 3)
		console.log("Performance: Energy Saver.");
	else
		console.log("Performance: Energy Sucker.");
}
}


var car_tester = new Car("Toyota", "Puris", 5); 
console.log(car_tester); 
car_tester.performance(); 

var car1 = {
	brand : 'Jeep',
	model : 'abc',
	 mpg : 2.1
}

console.log(car1.performance); 
 
 