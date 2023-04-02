var myIndex1 = 0;
//var myIndex2 = 0;
manFunction(myIndex1); //function declaration 1
autoFunction(); //function declaration 2

function plusDiv(n){
	manFunction(myIndex1 += n);
}

function currentDiv(n){
	manFunction(myIndex1 = n);
}
	
function manFunction(n){
	var i;
	var x = document.getElementsByClassName("mySlides");
	var img = document.getElementsByClassName("demo");
	if(n > x.length){myIndex1 = 1}
	if(n < 1){myIndex1 = x.length}
	for(i=0; i < x.length; i++){
		x[i].style.display = "none";
	}
	for(i=0; i < img.length; i++){
		img[i].className = img[i].className.replace(" w3-red", "");
	}
	x[myIndex1-1].style.display = "block";
	img[myIndex1-1].className += " w3-red";
}

function autoFunction(){
	var i;
    var x = document.getElementsByClassName("mySlides");
	var img = document.getElementsByClassName("demo");
	myIndex1++;
    if(myIndex1 > x.length){myIndex1 = 1}
    for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
    }
	for(i=0; i < img.length; i++){
		img[i].className = img[i].className.replace(" w3-red", "");
	}
    x[myIndex1-1].style.display = "block";
	img[myIndex1-1].className += " w3-red";
	setTimeout(autoFunction, 4600);
}