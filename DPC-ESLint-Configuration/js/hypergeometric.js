let hypergeometric;
let validate;

function callHypergeometric(num) {
  switch (num) {
    case 0:// on page load
      hypergeometric = new hypergeometric();
      break;
    case 1:// x
      hypergeometric.checkX();
      break;
    case 2:// n
      hypergeometric.check_n();
      break;
    case 3:// p
      hypergeometric.checkN();
      break;
    case 4:
      hypergeometric.checkK();
      break;
    case 'reset':// reset button
      hypergeometric.reset();
      break;
    case 'calculate':// result button
      hypergeometric.calculate();
      break;
    default:
      break;
  }
}


class Hypergeometric {
  constructor() {
    validate = new ValidateInput();
  }

  calculate () {
    if(checkAll()==true) {
      document.getElementById("result").disabled = false;
      const x = document.getElementById('x').value;
      const n = document.getElementById('n').value;
      const N = document.getElementById('N').value;
      const K = document.getElementById('K').value;
      let temp1 = Combination(K, x);
      let temp2 = Combination((N - K), (n - x));
      let temp3 = Combination(N, n);
      let temp4 = (temp1 * temp2) / temp3;
      document.getElementById("result").value = (temp4).toFixed(15);
    }
    else{
      document.getElementById("result").value="Invalid Input";
    }
  }

  checkX() {
    const xValue = document.getElementById('x').value;
    const error = document.getElementById('error1');
    if (validate.checkIfValidInput(xValue) === true) { // valid for X
      error.style.color = 'green';
      error.value = '  ✔';
      return true;
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
    return false;
  }

  checkN() {
    const nValue = document.getElementById('N').value;
    const error = document.getElementById('error2');
    if (validate.checkIfValidInput(nValue) === true) {
      if (this.checkNValue() === 1) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      } else if (this.checkNValue() === -2) {
        error.style.color = 'red';
        error.value = '  N must be greater than or equal to n';
        return false;

      } else {
        error.style.color = 'red';
        error.value = ' N must be greater or equal to 1'
        return false;
      }
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
    return false;
  }

  check_n() {
    const nValue = document.getElementById('n').value;
    const error = document.getElementById('error3');
    if (validate.checkIfValidInput(nValue) === true) {
      if (this.check_nValue() === true) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      }
      error.style.color = 'red';
      error.value = '  n must be greater than x';
      return false;
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
    return false;
  }

  check_nValue() { // n<=x
    const x = parseFloat(document.getElementById('x').value);
    const n = parseFloat(document.getElementById('n').value);
    return n >= x;
  }

  checkNValue() {
   // const x = parseFloat(document.getElementById('x').value);
    const n = parseFloat(document.getElementById('n').value);
    const N = parseFloat(document.getElementById('N').value);

    if( N >= 1 && N >= n){
      return 1;
    }
    else if( N>= 1){
      return -2;
    }
    else return -3;
  }

  checkK() {
    const K = parseFloat(document.getElementById('K').value);
    const N = parseFloat(document.getElementById('N').value);
    return K <= N;
  }



  }





/*

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
/*
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
*/