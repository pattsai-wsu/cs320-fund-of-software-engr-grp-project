function calculate_hyper(x,n,N,k){
  if(checkAll()==true){
    document.getElementById("result").disabled=false;
    let temp1=Combination(k,x);
    let temp2=Combination((N-k),(n-x));
    let temp3=Combination(N,n);
    let
  }
}
function Combination(first,second){
  let numerator=factorial(first);
  let denominator=(factorial(second))*factorial((first-second));
  let quotient=numerator/denominator;
  return quotient;
}

function factorial(num) {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else{ return (num * factorial(num - 1));
  }
}
