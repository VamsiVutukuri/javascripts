// class for implement classes
// this are of 2 types

//1
// using constructors

class Polygon{
	constructor(heigth , width){
		this.heigth = heigth;
		this.width = width;
	}
}

let p = new Polygon(10,20);
console.log("the p value is:" ,p);

// the only difference betwwen functional declartions and class declartions is
// the functional declartions can  be refered before its declaration 
// where as class should be declared first and then refered 
// or it leads to reference error
//example as below

try{
let p = new Polygon(10,20);
document.write('Polygon p:', p);
}
catch(err)
{
document.write(err.Name+ "is"+err.message);
}

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
document.write('Polygon p:', p); 



//2
// using class expressions these are of 2 types named and unnamed

// un_named class

let Polygon = class{
	constructor(height,width)
	{
		this.height=height;
		this.width=width;
	}
};

document.println("Polygon:" ,Polygon);
let p = new Polygon(10,20);
document.println("p is" , p);

// named expression

let  Polygon = Polygon class 
{
	constructor(height,width)
	{
		this.height = height;
		this.width = width;
	}
};

document.println("Polygon:" ,Polygon);
let p = new Polygon(10,20);
document.println("p is" , p);
