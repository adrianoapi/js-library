var Person = function() {
    this.canTalk = true;
    this.greet   = function() {
        if(this.canTalk) {
            console.log('Oi, Eu sou ' + this.name);
        }
    };
};

var Employee = function(name, title){
  this.name  = name;
  this.title = title;
  this.greet = function() {
      if(this.canTalk) {
          console.log("Oi, Eu sou " + this.name + ", o(a) " + this.title);
      }
  };
};
Employee.prototype = new Person();

var Customer = function(name){
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name){
    this.name    = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var adriano = new Employee('Adriano', 'Engenheiro');
var maria   = new Customer('Maria');
var katia   = new Employee('Katia Maria', 'Contadora');
var mike    = new Customer('Mike');
var mime    = new Mime('Mimeelly');

adriano.greet();
maria.greet();
katia.greet();
mike.greet();
console.log('\n');
console.log(mime.name);
