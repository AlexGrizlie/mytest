var user={
 name: 'Alexandr',
    lastName: 'Grigorenko',
    sayHello: function (){
     console.log('hello');
    },
    goToCar: function (){
        car['user'] = user;
        }
};
var car = {
    model: 'lanos',
}
   user.goToCar();
    console.log(car);

var x=1;
function test1(){
    var y=2; 
    console.log(y);
}
function test(){
    console.log(x);
}
test1();
test();
        


function this1() {
    var model = {model.name: 'lanos'; model.color: 'black'; model.age: '7'};
    var model = {model.name: 'mazda'; model.color: 'black'; model.age: '11'};
    var model = {model.name: 'zaz'; model.color: 'black'; model.age: '15'};
    var model = {model.name: 'kia'; model.color: 'black'; model.age: '7'};
    var model = {model.name: 'opel'; model.color: 'black'; model.age: '1'};

  
       alert( model.name + ': ' + model.color + model.age + 'лет'); 
    
}                



function this2() {
    var person = {person.name: 'Витя'; person.nation: 'ukraine'; person.age: '18'};
    var person = {person.name: 'Маша'; person.nation: 'ukraine'; person.age: '24'};
    var person = {person.name: 'Петя'; person.nation: 'ukraine'; person.age: '24'};
    var person = {person.name: 'Лена'; person.nation: 'ukraine'; person.age: '17'};
    var person = {person.name: 'Даша'; person.nation: 'ukraine'; person.age: '45'};

  
       alert( person.name + ': ' + person.nation + person.age + 'лет'); 
    
}







  