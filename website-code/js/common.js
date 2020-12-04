function checkIfValidInput(value){
	if(checkIfValid(value)==false || checkNumberOnly(value)==false){
		return false;
	}
	return true;
}

function checkIfValid(value){//if input 8.e == true
								// if it's 9== true, if it's teafgf==false
	if(isNaN(parseFloat(value)))	return false;
	return true;
}

function checkNumberOnly(value){ //98.a
	let getDecimal=false;
	for(let i=0; i<value.length; i++){
		if(getDecimal==false){//0-9
			if(value.charCodeAt(i)!=46 && value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
			return false;
			}
			if(value.charCodeAt(i)==46){
				getDecimal=true;
				if((i+1)==value.length) return false;
				i++;
			}
		}
		if(getDecimal==true){//0-9.0-9
			if(value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
				return false;
			}
		}
	}
	return true;
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
