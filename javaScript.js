
function love(){
var name1 = document.getElementById("NameOne").value;
var name2 = document.getElementById("NameTwo").value;

if(name1.length<=2){
  alert("Enter at last 3 charecter");
}
 if(name2.length<=2){
  alert("Enter at last 3 charecter");
}
else{
  var random = Math.floor(Math.random() * 100);
  document.getElementById("print").innerHTML= name1+ "+" + name2 + "= " +random + "%" + " of love";

}
if(random<=10|| random<=40){
  document.getElementById("habib").innerHTML= "Normal Ralationship";
}
else if(random<=41|| random<=60){
  document.getElementById("habib").innerHTML= "Good Ralationship";
}
else if(random<=61|| random<=90){
  document.getElementById("habib").innerHTML= "Lovely Ralationship";
}
else
  document.getElementById("habib").innerHTML= "Real Relationship";

}