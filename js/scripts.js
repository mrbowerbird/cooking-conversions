var galToLiter = function(gallon) {
	return gallon * 3.7854;
};
var gallon = parseFloat(prompt("How many gallons to convert to liters?"));
alert("You have " + galToLiter(gallon).toFixed(2) + " liters.");

var literToGal = function(liter) {
	return liter / 3.7854;
};
var liter = parseFloat(prompt("How many liters to convert to gallons?"));
alert("You have " + literToGal(liter).toFixed(2) + " gallons.");
