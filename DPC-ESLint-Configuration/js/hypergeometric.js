function calculate_hyper(x,n,N,k){
  if(checkAll()==true) {
    document.getElementById("result").disabled = false;
    let temp1 = Combination(k, x);
    let temp2 = Combination((N - k), (n - x));
    let temp3 = Combination(N, n);
    let temp4 = (temp1 * temp2) / temp3;
    document.getElementById("result").value = (temp4).toFixed(15);
  }
  else{
    document.getElementById("result").value="Invalid Input";
  }
}
/*function Combination(first,second){
  let numerator=factorial(first);
  let denominator=(factorial(second))*factorial((first-second));
  let quotient=numerator/denominator;
  return quotient;
}

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  else{
    return (num * factorial(num - 1));
  }
}*/
/*function checkAll(){
  if(check(1)==true&&check(2)==true&&check(3)==true){
    if(checkNValue()==true && checkNXValue()==true){
      return true;
    }
  }
  return false;
}*/

function check(num) {
  if (num == 1) {
    let xValue = document.getElementById("x").value;
    let error = document.getElementById("error1");
    if (checkIfValidInput(xValue) == true) {
      error.value = "✔";
      return true;
    } else {
      error.value = "Input must be valid";
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
  else if(num==3){ //num==3
      let NValue=document.getElementById("N").value;
      let kValue=document.getElementById("k").value;
      let nValue=document.getElementById("n").value;

      let error=document.getElementById("error3");
      if(checkIfValidInput(NValue,kValue,nValue)==true){
        if(checkNValue()==true){
          error.value="✔";
          return true;
        }
        else if(checkNValue()==1){
          error.value="N must be >= 1";
          return false;
        }
        else if(checkNValue()==2){
            error.value="N must be >= k"
          }
          else if(checkNValue()==3){
              error.value='N must be >= n'
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
    if(getDecimal===false){
      if(value.charCodeAt(i)!==46 && value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
        return false;
      }
      if(value.charCodeAt(i)===46){
        getDecimal=true;
        if((i+1)===value.length) return false;
        i++;
      }
    }
    if(getDecimal===true){
      if(value.charCodeAt(i)<48 || value.charCodeAt(i)>57){
        return false;
      }
    }
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


function checkNValue() {
  let N_one_check;
  let N_k_check;
  let N_n_check;
  let N = document.getElementById("N").value;
  let k = document.getElementById("k").value;
  let n= document.getElementById("n").value;
  if (N >= 1) {
    N_one_check = true;
  } else return 1;

  if (N>=k) {
    N_k_check = true;
  } else return 2;
  if (N>=n){
    let N_n_check=true
  } else return 3;
  if(N_one_check==true && N_k_check==true && N_n_check==true){
    return 4;//true value is 4, everything else is false value
  }
}

function checkAll(){
  if(check(1)==true&&check(2)==true&&check(3)==true){
    if(checkNValue()==4 && checkNXValue()==true){
      return true;
    }
  }
  return false;
}
function Combination(first,second){
  let numerator=factorial(first);
  let denominator=(factorial(second))*factorial((first-second));
  let quotient=numerator/denominator;
  return quotient;
}

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  else{
    return (num * factorial(num - 1));
  }
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

let acc = document.getElementsByClassName("info");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
