let hypergeometric;
let validate;

function callHypergeometric(num) {
  switch (num) {
    case 0:// on page load
      hypergeometric = new Hypergeometric();
      break;
    case 1:// x
      hypergeometric.checkX();
      break;
    case 2:// n
      hypergeometric.check_n();
      break;
    case 3:// N
      hypergeometric.checkN();
      break;
    case 4:// K
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
    if(this.checkAll()==true) {
      document.getElementById("result").disabled = false;
      const x = document.getElementById('x').value;
      const n = document.getElementById('n').value;
      const N = document.getElementById('N').value;
      const K = document.getElementById('K').value;
      const temp1 = validate.Combination(K, x);
      const temp2 = validate.Combination((N - K), (n - x));
      const temp3 = validate.Combination(N, n);
      const temp4 = (temp1 * temp2) / temp3;
      document.getElementById("result").value = (temp4);
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
    const NValue = document.getElementById('N').value;
    const error = document.getElementById('error2');
    if (validate.checkIfValidInput(NValue) === true) {
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

  checkK() {
    const KValue = document.getElementById('K').value;
    const error = document.getElementById('error4');
    if (validate.checkIfValidInput(KValue) === true) {
      if (this.checkKValue() === 1) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      }
      else if (this.checkKValue() === -2) {
        error.style.color = 'red';
        error.value = '  K must be greater than or equal to x';
        return false;

      } else {
        error.style.color = 'red';
        error.value = ' K must be less than or equal to K'
        return false;
      }
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
      return -2; // N !>= n
    }
    else return -3; // N!>= 1
  }

  checkKValue() {
    const K = parseFloat(document.getElementById('K').value);
    const N = parseFloat(document.getElementById('N').value);
    const x = parseFloat(document.getElementById('x').value);
    if( K<= N && K >= x){
      return 1;
    }
    else if( K<= N) {
      return -2; // K !>= x
    }
    else return -3; //K !<= N
  }

  checkAll() {
    if (this.checkX() === true && this.checkN() === true && this.check_n() === true && this.checkK() === true) {
      if (this.check_nValue() === true && this.checkNValue() === 1 && this.checkKValue() === 1) {
        return true;
      }
    }
    return false;
  }

  reset() {
    document.getElementById('x').value = '0';
    document.getElementById('n').value = '0';
    document.getElementById('N').value = '0';
    document.getElementById('K').value = '0';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('error3').value = '';
    document.getElementById('error4').value = '';
    document.getElementById('result').value = '';
  }
}
