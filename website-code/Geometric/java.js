function calculate_geometric(x,p){
  if(checkAll()==true) {
    document.getElementById("result").disabled = false;
    let temp1 = (1-p);
    let temp2 = (x-1);
    let temp3 = temp1^temp2;
    let temp4 = temp3*p;
    document.getElementById("result").value = (temp4).toFixed(15);
  }
  else{
    document.getElementById("result").value="Invalid Input";
  }
}

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
  if (num == 2) {
    let pValue = document.getElementById("p").value;
    let error = document.getElementById("error2").value;
    if (checkIfValid(pValue) == true) {
      if (checkPValue() == true) {
        error.value = "✔";
        return true;
      } else {
        error.value = "p must be between 1 and 0";
        return false;

      }
    } else {
      error.value = "Input must be valid";
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

function checkPValue(){
  let p=document.getElementById("p").value;
  if(p>=1 || p<=0){
    return false;
  }
  else {
    return true;
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
