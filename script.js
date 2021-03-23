var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];
var printit = document.body.querySelector(".printit");
for (var i=0; i<stringers.length; i++){
	var ele=document.createElement("div");
	var slct = stringers[i];
	var extrabit = "";
	if (slct<10){extrabit="it is a number below 10.";}
	else if(slct.length>5){extrabit="the string's character length is more than 5.";}
	else if(slct===15){extrabit="the number is exactly 15.";}
	else {extrabit="normal.";}
	ele.innerHTML = "The value is "+slct+" and "+extrabit+" ";
	ele.addEventListener("click",function(){
		this.style.color="blue";
	})
	document.body.appendChild(ele);
}