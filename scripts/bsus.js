var items;
var totalusage;

select = document.getElementById("select");
var value = select.options[select.selectedIndex].value;
	
	if (value == "competition4101"){	
		items = competition4101;
		totalusage = competition4101_totalusage;
	}
	if (value == "competition4102"){	
		items = competition4102;
		totalusage = competition4102_totalusage;
	}

var mon;
var tab = 0;
var tabnum = 44;

function createButtons(){
	
	for (i = 0; i < items.length; i++){		
		var div = document.createElement("div");
		div.textContent = "#" + (1 + i) + " - " + dict[items[i][0]];
		if (i == mon){
			div.setAttribute("class", "clickedbutton");	
		}else{
			div.setAttribute("class", "button");	
		}
		div.setAttribute("onClick", "resetData(" + i + ")");		
		div.setAttribute("id", "button" + i);
		document.getElementById("buttonlist").appendChild(div);
	}
}


function setData(number){	
	
	mon = number;
	
	var type;
	type = items[number][2] + "/" + items[number][3];
	if (items[number]["3"] == "null"){				
		type = items[number][2];
	}
	pokedexNo = items[number][0].substring(0,items[number][0].length - 2);
	document.getElementById("monsinfo2").innerHTML = "#" + pokedexNo +" - "+ dict[items[number][0]] + " - " + type + " type" + " - Estimated usage: " + Math.round(items[number][items[number].length-1]/totalusage*60000)/100 + "%";
	if (tab == 0 || tab == 1 || tab == 2 || tab == 3 || tab == 4 || tab == 6){
		var totalperc = 0;
		var stop = 20;
		for (i = 0; i < stop; i++){
			document.getElementById("td" + (3 * (i+1) - 1).toString()).innerHTML = items[number][tabnum + 2*i];
			totalperc += parseFloat(items[number][tabnum + 1 + 2*i]);
			document.getElementById("td" + (3 * (i+1)).toString()).innerHTML = items[number][tabnum + 1 + 2*i] + "%";
		}

	}
	
	if (tab == 5 || tab == 7 || tab == 8){
		for (i = 0; i < 20; i++){
			var id = items[number][tabnum + i];
			var name = dict[id];
			document.getElementById("td" + (3 * (i+1) - 1).toString()).innerHTML = name;
			document.getElementById("td" + (3 * (i+1)).toString()).innerHTML = "";
		}
	}
	
	for (i = 0; i < 20; i++){
		if (document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML == "null"){
			document.getElementById("td" + ((i+1)*3).toString()).innerHTML = "";		
			document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML = "";
			document.getElementById("td" + ((i+1)*3-2).toString()).innerHTML = "";
		}
	}
	
	for (i = 0; i < 20; i++){
		if (document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML == "undefined"){
			document.getElementById("td" + ((i+1)*3).toString()).innerHTML = "";		
			document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML = "";
			document.getElementById("td" + ((i+1)*3-2).toString()).innerHTML = "";
		}
	}
	
	for (i = 0; i < 20; i++){
		if (document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML != ""){
			document.getElementById("td" + ((i+1)*3-2).toString()).innerHTML = "#" + (i + 1);
		}
	}
	
	if (tab == 2){
		for (i = 3; i < 20; i++){
			document.getElementById("td" + ((i+1)*3).toString()).innerHTML = "";			
			document.getElementById("td" + ((i+1)*3-1).toString()).innerHTML = "";
			document.getElementById("td" + ((i+1)*3-2).toString()).innerHTML = "";
		}
	}
	
	if (tab == 1){
		if (document.getElementById("td1").innerHTML == ""){
			document.getElementById("noitems").innerHTML = "Held item data for this Pokemon is unavailable, presumably because this Pokemon has not used any held items, or because the competition/ladder didn't allow the use of held items.";
			
			document.getElementById("td62").innerHTML = "";
			document.getElementById("td63").innerHTML = "";
		}
	}
	
	if (tab != 1){
		document.getElementById("noitems").innerHTML = "";
	}
	
	var total = 400;
	if (tab == 4 || tab == 3){
		total = 100;
	}
	
	var other = total - totalperc;
	if (tab == 2 || tab == 6){
		other = 0;
	}		
	
	document.getElementById("td62").innerHTML = "Other";
	document.getElementById("td63").innerHTML = other + "%";
	
	if ((document.getElementById("td59").innerHTML == "")){
		document.getElementById("td62").innerHTML = "";
		document.getElementById("td63").innerHTML = "";		
	}
	
	
	if (tab == 2 || tab == 5 || tab == 7 || tab == 8){
		document.getElementById("td62").innerHTML = "";
		document.getElementById("td63").innerHTML = "";
	}

	
}

function setTab(number){
	tab = number;
	
	document.getElementById("tabbutton0").className = "coloredbutton";
	document.getElementById("tabbutton1").className = "coloredbutton";
	document.getElementById("tabbutton2").className = "coloredbutton";
	document.getElementById("tabbutton3").className = "coloredbutton";
	document.getElementById("tabbutton4").className = "coloredbutton";
	document.getElementById("tabbutton5").className = "coloredbutton";
	document.getElementById("tabbutton6").className = "coloredbutton";
	document.getElementById("tabbutton7").className = "coloredbutton";
	document.getElementById("tabbutton8").className = "coloredbutton";
	
	if (tab == 0){
		tabnum = 44;		
		document.getElementById("tabnamespan").innerHTML = "Moves";
		document.getElementById("tabbutton0").className = "coloredclickedbutton";
	}
	if (tab == 1){
		tabnum = 4;
		document.getElementById("tabnamespan").innerHTML = "Items";
		document.getElementById("tabbutton1").className = "coloredclickedbutton";
	}
	if (tab == 2){
		tabnum = 84;
		document.getElementById("tabnamespan").innerHTML = "Abilities";
		document.getElementById("tabbutton2").className = "coloredclickedbutton";
	}
	if (tab == 3){
		tabnum = 90;
		document.getElementById("tabnamespan").innerHTML = "Natures";
		document.getElementById("tabbutton3").className = "coloredclickedbutton";
	}	
	if (tab == 4){
		tabnum = 130;
		document.getElementById("tabnamespan").innerHTML = "Moves when victorious";
		document.getElementById("tabbutton4").className = "coloredclickedbutton";
	}	
	if (tab == 5){
		tabnum = 170;
		document.getElementById("tabnamespan").innerHTML = "Opponents when victorious";
		document.getElementById("tabbutton5").className = "coloredclickedbutton";
	}
	if (tab == 6){
		tabnum = 190;
		document.getElementById("tabnamespan").innerHTML = "Moves when defeated";
		document.getElementById("tabbutton6").className = "coloredclickedbutton";
	}
	if (tab == 7){
		tabnum = 230;
		document.getElementById("tabnamespan").innerHTML = "Opponents when defeated";
		document.getElementById("tabbutton7").className = "coloredclickedbutton";
	}
	if (tab == 8){
		tabnum = 250;
		document.getElementById("tabnamespan").innerHTML = "Teammates";
		document.getElementById("tabbutton8").className = "coloredclickedbutton";
	}
		
	setData(mon);
}

function resetData(number){	
    
	document.getElementById("buttonlist").innerHTML = "";
	
	var value = select.options[select.selectedIndex].value;

	if (value == "competition4101"){	
		items = competition4101;
		totalusage = competition4101_totalusage;
	}
	if (value == "competition4102"){	
		items = competition4102;
		totalusage = competition4102_totalusage;
	}
	mon = number;
	setTab(0);
	createButtons();
	setData(mon);
	
}

resetData(0);
