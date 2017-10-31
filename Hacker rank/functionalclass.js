/*
// js functional classes
//we can implent classes in java scripts using 3 methods

//1 st method

// we have to create a java script function
// create a object using new keyword
// we then create properties and methods using "this" keyword


function fruit(type)
{
	this.type = type;
	this.color = "unknown";
	this.getinfo = getinfo;
}

function getinfo()
{
	return "This"+ this.type+"is in "+this.color;
}




let lime  = new fruit("pulpy oranage"); // lime is the object we created using new
document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"
lime.color = "green"; // add a new property
document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"

// 2 method


// here we will create a function inside a function

function fruit(type){
	this.type = type;
	this.color = "unknown";
	this.getinfo = function(){
		return "This"+this.type+"is an"+this.color;
	}

}


let lime  = new fruit("pulpy oranage"); // lime is the object we created using new
document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"
lime.color = "green"; // add a new property
document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"




// 3 method
// the drawback of using is a function inside a function is 
//the function created everytime we create a object
//we can overcome this using the following
// using prototype function of function which default value is empty
// we can see as the object blueprint and we can add properties to methods in all instances
// nothing other than inheritance

function fruit(type){
	this.type = type;
	this.color = "unknown";
}

fruit.prototype.getinfo = function(){
		return "This"+this.type+"is an"+this.color;
	}



let lime  = new fruit("pulpyoranage"); // lime is the object we created using new
document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"
lime.color = "green"; // add a new property
document.writeln(lime.getinfo());
*/

//4 
// using json format (object literial)

var lime ={
	type : "melon lime",
	color: "black",
	getinfo: function() {
        return "This" + this.type + "is" + this.color + ".";
			}
  }

document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"
lime.color = "green"; // add a new property
document.writeln(lime.getinfo());

//5
//single ton class this  restricts a class to a single object
// how to intialize :-  new function(){....} to a variable (line no 105)
//now , We define an anonymous constructor function.
//We invoke the anonymous constructor function with the new keyword.

var lime  = new function(){
	this.type ="melon white";
	this.color="black";
	this.getinfo = function(){
		 return "This" + this.type + "is" + this.color + ".";
	}
}

document.writeln(lime.getinfo());
//print the properties of the object by callling its methods "objectname.methodname()"
lime.color = "green"; // add a new property
document.writeln(lime.getinfo());

