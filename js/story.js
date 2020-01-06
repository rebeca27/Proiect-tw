var details= ["Named « Rebecca's Bistro » the restaurant is classified as a historical monument. Indeed, its very authentic Art Nouveau style makes it a must see from the Belle Epoque period.A la carte, fresh and seasonal products, prepared by chef Christophe Moisand.Come and enjoy a leek with dressing and these roasted hazelnut in beautiful company of period moldings and its «women flowers» painted on molten glass.And this, at a price more than affordable.For connoisseurs and curious, the bar is signed by Louis Majorelle, cabinetmaker and decorator of Art Nouveau."];
document.getElementById("test").innerHTML = details; 

function myFunc() {
  details.push("Do you know the restaurant, or do you want to go?");
  document.getElementById("test").innerHTML = details;
}