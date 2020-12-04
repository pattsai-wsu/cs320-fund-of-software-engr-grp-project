
function calculate(x,n,p){
    if(checkAll()==true){
		document.getElementById("result").disabled=false;
		let v1=Combination(n,x);
   		let v2=Math.pow(p,x);
   	 	let v3=Math.pow(1-p,n-x);
		document.getElementById("result").value=(v1*v2*v3);
	}
	else{
		document.getElementById("result").value="Invalid Input";
	}
}

function check(num){
	if(num==1){
		let xValue=document.getElementById("x").value;
		let error=document.getElementById("error1");
		if(checkIfValidInput(xValue)==true){//valid for X
			error.style.color="green";
			error.value="  ✔";
			return true;
		}
		else{
			error.style.color="red";
			error.value="  Input must be valid";
			return false;
		}
	}
	else if(num==2){
		let nValue=document.getElementById("n").value;
		let error=document.getElementById("error2");
		if(checkIfValidInput(nValue)==true){
			if(checkNXValue()==true){
				error.style.color="green";
				error.value="  ✔";
				return true;
			}
			else{
				error.style.color="red";
				error.value="  n must be greater than x";
				return false;
			}
		}
		else{
			error.style.color="red";
			error.value="  Input must be valid";
			return false;
		}
	}
	else{ //num==3
		let pValue=document.getElementById("p").value;
		let error=document.getElementById("error3");
		if(checkIfValidInput(pValue)==true){
			if(checkPValue()==true){
				error.style.color="green";
				error.value="✔";
				return true;
			}
			else{
				error.style.color="red";
				error.value="  p must between 1 and 0";
				return false;
			}
		}
		else{
			error.style.color="red";
			error.value="  Input must be valid";
			return false;
		}
	}	
}

function checkPValue(){
	let p=document.getElementById("p").value;
	if(p>=1 || p<=0){
		return false;
	}
	return true;
}

function checkNXValue(){//n<=x
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

function reset(){
	document.getElementById("x").value="0";
	document.getElementById("n").value="0";
	document.getElementById("p").value="0";
	document.getElementById("error1").value="";
	document.getElementById("error2").value="";
	document.getElementById("error3").value="";
	document.getElementById("result").value="";
}


