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
    var model = {name: 'lanos', color: 'black',  age: '7'};
    var model2 = {name: 'mazda', color: 'black', age: '11'};
    var model3 = {name: 'zaz', color: 'black', age: '15'};
    var model4 = {name: 'kia', color: 'black', age: '7'};
    var model5 = {name: 'opel', color: 'black', age: '1'};

   console.log( model.name + ' : ' + model.color + ' ' + model.age + ' лет'); 
   console.log( model2.name + ' : ' + model2.color + ' ' + model2.age + ' лет');
   console.log( model3.name + ' : ' + model3.color + ' ' + model3.age + ' лет');
   console.log( model4.name + ' : ' + model4.color + ' ' + model4.age + ' лет');
   console.log( model5.name + ' : ' + model5.color + ' ' + model5.age + ' лет');
       
    
}    this1()                



function this2() {
    var person = {person.name: 'Витя'; person.nation: 'ukraine'; person.age: '18'};
    var person = {person.name: 'Маша'; person.nation: 'ukraine'; person.age: '24'};
    var person = {person.name: 'Петя'; person.nation: 'ukraine'; person.age: '24'};
    var person = {person.name: 'Лена'; person.nation: 'ukraine'; person.age: '17'};
    var person = {person.name: 'Даша'; person.nation: 'ukraine'; person.age: '45'};

  
       alert( person.name + ': ' + person.nation + person.age + 'лет'); 
    
} this2() 







  