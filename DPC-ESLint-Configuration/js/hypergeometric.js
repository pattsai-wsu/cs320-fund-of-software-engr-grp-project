let hypergeometric;
let validate;

class Hypergeometric {

  constructor(a, b, c) {
    validate = new ValidateInput();
    this.x = -1;
    this.n = -1;
    this.N = -1;
    this.k = -1;
    this.error1 = a;
    this.error2 = b;
    this.error3 = c;
    this.result = document.getElementById('result');
  }

  verifyX() {
    if (this.checkX() === true) {
      this.x = parseFloat(this.x);
      this.error1.style.color = 'green';
      this.error1.value = '✔';
    } else {
      this.x = -1;
      this.error1.style.color = 'red';
      this.error1.value = 'Input must be valid integer';
    }
  }

  verifyn() {
    switch (this.checkn()) {
      case 1: // n >= x is true
        this.n = parseFloat(this.n);
        this.error2.style.color = 'green';
        this.error2.value = '✔';
        break;
      case 2: // when n !>= x
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'n must be greater than or equal to x';
        break;
      default: // when n is not a integer
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'Input must be valid integer';
        break;
    }
  }

  verifyN() {
    switch (this.checkN()) {
      case 1: // N is good
        this.p = parseFloat(this.p);
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        break;
      case 2: // when N >= n but not >= 1
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'N must be greater than or equal to 1';
        break;
      case 3: // when neither is true
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = ' N must be greater than or equal to 1 and greater than or equal to n'
      default: // N is valid
        this.p = -1
        this.error3.style.color = 'red';
        this.error3.value = 'Input must be valid integer';
        break;
    }
  }
  verifyk () {
    switch (this.checkK()) {
      case 1: // k is good
        this.p = parseFloat(this.p);
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        break;
      case 2: // when k !<= n but k >= x
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'k must be less than or equal to n';
        break;
      case 3: // when neither is true
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = ' k must be less than or equal to n and greater or equal to x'
      default: // k is invalid
        this.p = -1
        this.error3.style.color = 'red';
        this.error3.value = 'Input must be valid integer';
        break;
    }
  }

  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.hyperFormula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  hyperFormula() {
    const temp1 = validate.Combination(this.k, this.x);
    const temp2 = validate.Combination((this.N - this.k), (this.n - this.x));
    const temp3 = validate.Combination(this.N, this.n);
    const temp4 = (temp1 * temp2) / temp3;
    return temp4;
  }

  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
    return false;
  }

  checkn() { //1 means n is good, 2 means n!>=x, 3 means n is invalid
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if (this.n >= this.x) {
        return 1;
      } else {
        return 2;
      }
    }
    return 3;
  }

  checkN() {
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if (this.N >= 1 && this.N >= this.n) {
        return 1;
      } else if (this.N >= 1) {
          return 2; // N !>= n
        } else
      return 3; // N!>= 1
    }
    return 4;
  }

  checkK() {
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if( this.k <= this.N && this.k >= this.x){
        return 1;
      }
      else if( this.k <= this.N) {
        return 2; // K !>= x
      }
      else return 3; //K !<= N
    }
    return 4
    }

  checkAll() {
    if (this.n === -1 || this.x === -1 || this.N === -1 || this.k === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
  /*  if (this.n < this.x) {
      this.error1.value = 'x must be less than or equal n';
      this.error2.value = '!';
      return false;
    }*/
    this.error1.value = '✔';
    this.error2.value = '✔';
    this.error3.value = '✔';
    return true;
  }

  reset() {
    document.getElementById('x').value = '';
    document.getElementById('n').value = '';
    document.getElementById('N').value = '';
    document.getElementById('k').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.error3.value = '';
    this.result.value = '';
    this.k = -1;
    this.N = -1;
    this.n = -1;
    this.x = -1;
    this.result.disabled = true;
  }

}

function callHypergeometric(num, value, value2, value3) {
  switch (num) {
    case 0:// on page load
      hypergeometric = new Hypergeometric(value, value2, value3);
      break;
    case 1:// x
      hypergeometric.x = value;
      hypergeometric.verifyX();
      break;
    case 2:// n
      hypergeometric.n = value;
      hypergeometric.verifyn();
      break;
    case 3:// N
      hypergeometric.N = value;
      hypergeometric.verifyN();
      break;
    case 4:
      hypergeometric.k = value;
      hypergeometric.verifyk();
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

  /*
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
      const N = document.getElementById('_N').value;
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
    const NValue = document.getElementById('_N').value;
    const error = document.getElementById('error3');
    if (validate.checkIfValidInput(NValue) === true) {
      if (this.checkNValue() === 1) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      } else if (this.checkNValue() === -2) {
        error.style.color = 'red';
        error.value = 'N must be greater than or equal to n';
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
    const error = document.getElementById('error2');
    if (validate.checkIfValidInput(nValue) === true) {
      if (this.check_nValue() === true) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      }
      else {
        error.style.color = 'red';
        error.value = '  n must be greater than x';
        return false;
      }
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
        error.value = ' K must be less than or equal to N'
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
    const N = parseFloat(document.getElementById('_N').value);

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
    const N = parseFloat(document.getElementById('_N').value);
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
    document.getElementById('_N').value = '0';
    document.getElementById('K').value = '0';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('error3').value = '';
    document.getElementById('error4').value = '';
    document.getElementById('result').value = '';
  }
}
*/
