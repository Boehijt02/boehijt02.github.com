var usage1 = sm_202_1;
var usage2 = sm_203_1;

var pokemon1 = [];
var pokemon2 = [];

for (var i = 0; i < usage1.length; i++){	
	pokemon1[i] = usage1[i];
}

for (var i = 0; i < usage2.length; i++){
	
	var name = usage2[i][0];
	console.log(name);
	
	for (var i = 0; i < usage1.length; i++){
		if (name == usage1[i][0]){
			pokemon2[i] = usage2[i];
		}
	}
}

for (var i = 0; i < usage1.length; i++){	
	console.log(dict[pokemon1[i][0]] + " - " + dict[pokemon2[i][0]]);
}
