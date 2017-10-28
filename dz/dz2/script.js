// пузырьком
(function(myOrdering) {
	console.log('Исходный массив:' + myOrdering);
	for (var j = 0; j < myOrdering.length - 1; j++) {
		for (var i = 0; i < myOrdering.length - 1; i++) {
			if (myOrdering[i] > myOrdering[i + 1]) {
				var k = myOrdering[i];
				myOrdering[i] = myOrdering[i + 1];
				myOrdering[i + 1] = k;
			}
		}
		console.log('Новый массив:' + myOrdering);	
	}
}) ([1,6,3,2,5,4]);
//найти и вывести строку
(function(searchString) {
var i = 0;
while (i < searchString.length){
    i++;
    if (typeof(searchString[i]) === typeof('string'))
        console.log(searchString[i]);
}
}) ([1, 2, 3, 'строка', 5, 6]);
//найти и вывести число 
(function(searchNumber) {
var i = 0;
while (i < searchNumber.length){
    i++;
    if (typeof(searchNumber[i]) === typeof(0))
        console.log(searchNumber[i]);
}
}) ([1, 2, 3, 'строка', 5, 6]);