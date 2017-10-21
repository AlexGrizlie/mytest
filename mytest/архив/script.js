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
    model: 'lanos'
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
        



