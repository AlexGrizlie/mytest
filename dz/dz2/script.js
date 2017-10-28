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

//var a = [1,6,3,2,5,4],
	//	i, j, k, n = a.length;