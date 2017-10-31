//inheritance using extends in child class
class Animal
{
  constructor(name)
  {
      this.name = name;
   }
   speak()
   {
      return document.write(this.name+" "+"speaks");
   }
}

class Dog extends Animal
{
 speak()
   {
  return document.write(this.name+" "+"Barks"+);
        
 }
}

let spot = new Animal('Vamsi');
spot.speak();
spot = new Dog('snoopy');
spot.speak();
















// using Super keyword in childclass to access to override the Parent class
class Animal
{
	constructor(name)
    {
    	this.name = name;
    }
    getname()
    {
    	return document.write(this.name+" "+"Speaks"+"\n");
    }
    
}

class Dog extends Animal
{
	getname()
    {
			super.getname();    
	    	return document.write(this.name+" "+"Barks"+"   ");
    }
}

let spot = new Dog('snoopy');
spot.getname();



// using super multiple parameters

class Animal
{
    constructor(name)
    {
        this.name = name;
        this.Animaltype ="Animal";
    }
    type()
    {
        return document.write(this.name +"is a"+this.Animaltype);
    }
    speak()
    {
        return document.write(this.name+" "+"speaks");
    }
}
class Dog extends Animal
{
    constructor(name ,Collarcolor)
    {
        super(name);
        this.Animaltype = "Dog";
        this.Collarcolor = Collarcolor;
    }
    speak()
    {
        return document.write(this.name+"Barks"+" ");
    }
    color()
    {
        return document.write(this.name+"has a"+ this.Collarcolor+"color");
    }
    
}

let spot = new Dog("Snow","Red");
spot.type();
spot.speak();
spot.color();


spot = new Animal("snoopy" ,"white");
spot.type();
spot.speak();
