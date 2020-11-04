//to do:
//	1. check x must be less or equal to n
//  2. 0<= p must be less or equal 1
// can add cumulative probability 

function checkInput(num){
	check(num);
	// checkAll();
}

function checkAll(){
	if(check(1)==true&&check(2)==true&&check(3)==true){
		document.getElementById("result").disabled=false;
		document.getElementById("result").value='';
	}
	else{
		document.getElementById("result").disabled=true;
		document.getElementById("result").value='input incorrect';
	}
}

function check(num){
	let place=num;
	let tempValue;
	if(num==1)	tempValue=document.getElementById("x").value;
	if(num==2)	tempValue=document.getElementById("n").value;
	if(num==3)	tempValue=document.getElementById("p").value;
	if(checkIfValid(tempValue)===false || checkNumberOnly(tempValue)===false){
		document.getElementById("result").value="";
		printError(place);
		return false;
	}
	if(num==3){
		if(checkLimit(tempValue))
		document.getElementById("error3").value='';
		else 
		return false;
	}
	if(num==1)	document.getElementById("error1").value='';
	if(num==2)	document.getElementById("error2").value='';
	if(num==3)	document.getElementById("error3").value='';
	return true;
}

function checkIfValid(input){
	if(Number.isNaN(parseFloat(input)))	return false;
	return true;
}

function checkNumberOnly(a){
	for(let i=0; i<a.length; i++){
		if(a.charCodeAt(i)!=46 && a.charCodeAt(i)<48 || a.charCodeAt(i)>57){
			return false;
		}
	}
	return true;
}

function checkLimit(a){
	if(a>1 || a<0){
		document.getElementById("error3").value="Probability is between 0 and 1";
		return false;
	}
	return true;
}


function printError(location){
		if(location==1){
			document.getElementById("error1").value="Please enter numbers only";
		}
		if(location==2){
			document.getElementById("error2").value="Please enter numbers only";
		}
		if(location==3){
			document.getElementById("error3").value="Please enter numbers only";
		}
		document.getElementById("result").disabled=true;
		return;
}

function calculate(a,b,c){
//	if(!checkAll())	return;
    checkAll();
	let x=a;
	let n=b;
	let p=c;

	let v1=Combination(n,x);
    let v2=Math.pow(p,x);
    let v3=Math.pow(1-p,n-x);
    document.getElementById("result").value=v1*v2*v3;
}

function Combination(n,r){
    let top=Factorial(n);//nominator
    let bottom=Factorial(r)*Factorial(n-r);//denominator
    return top/bottom;
}

function Factorial(n){
    if (n===0)  return 1;
    else return n*Factorial(n-1);
}


var acc = document.getElementsByClassName("info");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}