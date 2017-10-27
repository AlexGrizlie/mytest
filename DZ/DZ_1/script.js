var moto = {
  mark : 'Suzuki',
  topSpeed : '300',
  run: function () {
    console.log (moto.mark + ' ' + 'максимальная скорость' + ' ' + moto.topSpeed + ' ' + 'км/ч')
     }
};
var user = {
  name : 'Anton',
  age : 32,
details: function () {  
  console.log(user.name + ' ' + user.age + ' ' + ' года катает на')
  }
};
user.details();
moto.run();


