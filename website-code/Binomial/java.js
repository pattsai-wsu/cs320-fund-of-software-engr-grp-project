
function calculate(x,n,p){
    if(checkAll()==true){
		document.getElementById("result").disabled=false;
		let v1=Combination(n,x);
   		let v2=Math.pow(p,x);
   	 	let v3=Math.pow(1-p,n-x);
		document.getElementById("result").value=(v1*v2*v3).toFixed(15);
	}
	else{
		document.getElementById("result").value="Invalid Input";
	}
}

function check(num){
	if(num==1){
		let xValue=document.getElementById("x").value;
		let error=document.getElementById("error1");
		if(checkIfValidInput(xValue)==true){
			error.value="✔";
			return true;
		}
		else{
			error.value="Input must be valid";
			return false;
		}
	}
	else if(num==2){
		let nValue=document.getElementById("n").value;
		let error=document.getElementById("error2");
		if(checkIfValidInput(nValue)==true){
			if(checkNXValue()==true){
				error.value="✔";
				return true;
			}
			else{
				error.value="n must be greater than x";
				return false;
			}
		}
		else{
			error.value="Input must be valid";
			return false;
		}
	}
	else{ //num==3
		let pValue=document.getElementById("p").value;
		let error=document.getElementById("error3");
		if(checkIfValidInput(pValue)==true){
			if(checkPValue()==true){
				error.value="✔";
				return true;
			}
			else{
				error.value="p must between 1 and 0";
				return false;
			}
		}
		else{
			error.value="Input must be valid";
			return false;
		}
	}	
}

function checkIfValidInput(value){
	if(checkIfValid(value)==false || checkNumberOnly(value)==false){
		return false;
	}
	return true;
}

function checkIfValid(value){
	if(isNaN(parseFloat(value)))	return false;
	return true;
}

function checkNumberOnly(value){
	let getDecimal=false;
	for(let i=0; i<value.length; i++){
		if(getDecimal==false){
			if(value.charCodeAt(i)!=46 && value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
			return false;
			}
			if(value.charCodeAt(i)==46){
				getDecimal=true;
				if((i+1)==value.length) return false;
				i++;
			}
		}
		if(getDecimal==true){
			if(value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
				return false;
			}
		}
	}
	return true;
}

function checkPValue(){
	let p=document.getElementById("p").value;
	if(p>=1 || p<=0){
		return false;
	}
	return true;
}

function checkNXValue(){
	let x=parseFloat(document.getElementById("x").value);
	let n=parseFloat(document.getElementById("n").value);
	if(n<=x){
		return false;
	}
	return true;
}

function checkAll(){
	if(check(1)==true&&check(2)==true&&check(3)==true){
		if(checkPValue()==true && checkNXValue()==true){
			return true;
		}
	}
	return false;
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

function reset(){
	document.getElementById("x").value="0";
	document.getElementById("n").value="0";
	document.getElementById("p").value="0";
	document.getElementById("error1").value="";
	document.getElementById("error2").value="";
	document.getElementById("error3").value="";
	document.getElementById("result").value="";
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