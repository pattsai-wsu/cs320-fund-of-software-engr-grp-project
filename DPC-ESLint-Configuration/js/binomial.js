let binomial; // instance of Binomial class
let validate; // instance of ValidateInput class

/**
 *Function: callBinomial(data)-call appropriate method of the Binomial class as needed
 * */
function callBinomial(num) {
  switch (num) {
    case 0:// on page load
      binomial = new Binomial();
      break;
    case 1:// x
      binomial.x = document.getElementById('x').value;
      binomial.checkX();
      break;
    case 2:// n
      binomial.n = document.getElementById('n').value;
      binomial.checkN();
      break;
    case 3:// p
      binomial.p = document.getElementById('p').value;
      binomial.checkP();
      break;
    case 'reset':// reset button
      binomial.reset();
      break;
    case 'calculate':// result button
      binomial.calculate();
      break;
    default:
      break;
  }
}

/**
 *Class: Binomial - all methods that binomial will be needed
 *consists of:
 *          constructor();
 *          calculate();
 *          checkX();
 *          checkN();
 *          checkP();
 *          checkPValue();
 *          checkNXValue();
 *          checkAll();
 *          reset()
 * */
class Binomial {
  constructor() {
    validate = new ValidateInput();
    this.x = -1;
    this.n = -1;
    this.p = -1;
    this.error1 = document.getElementById('error1');
    this.error2 = document.getElementById('error2');
    this.error3 = document.getElementById('error3');
    this.result = document.getElementById('result');
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      const v1 = validate.Combination(this.n, this.x);
      const v2 = Math.pow(this.p, this.x);
      const v3 = Math.pow(1 - this.p, this.n - this.x);
      this.result.style.color = 'black';
      this.result.value = (v1 * v2 * v3);
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
    return this.result.value;
  }

  /**
   *Function: checkX()
   *  Rule: x value must be a valid float number
   *  Return:
   *    _if the rule has not been satisfied - print a red error message in the error box
   *    _else - print a check mark in the error box
   * */
  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) { // valid for X
      this.error1.style.color = 'green';
      this.error1.value = '✔';
      return true;
    }
    this.x = -1;
    this.error1.style.color = 'red';
    this.error1.value = 'Input must be valid Integer';
    return false;
  }

  /**
   * Function: checkN()
   *  Rule: n value must be a valid float number, and n >= x
   *  Return:
   *    _if all rules have been satisfied - print a check mark in the error box
   *    _else - print the error message accordingly
   * */
  checkN() {
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if (this.n < 1) {
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'n must be at least 1';
        return false;
      }
      this.error2.style.color = 'green';
      this.error2.value = '✔';
      return true;
    }
    this.n = -1;
    this.error2.style.color = 'red';
    this.error2.value = 'Input must be valid Integer';
    return false;
  }

  /**
   * Function: checkP()
   *  Rule: p value must be a valid float number, and p=[0,1]
   *  Return:
   *    _if all rules have been satisfied - print a check mark in the error box
   *    _else - print the error message accordingly
   * */
  checkP() {
    if (validate.checkIfValidInput(this.p) === true) {
      if (this.p <= 1 && this.p >= 0) {
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        return true;
      }
      this.p = -1;
      this.error3.style.color = 'red';
      this.error3.value = 'p must between 1 and 0';
      return false;
    }
    this.p = -1;
    this.error3.style.color = 'red';
    this.error3.value = 'Input must be valid';
    return false;
  }

  /**
   * Function: checkNXValue()
   *  Rule: n >= x
   *  Return:
   *    _true - if n >= x
   *    _false - if n < x
   * */
  checkNXValue() { // n>=x
    return this.n >= this.x;
  }

  /**
   * Function: checkAll()
   *  Rules: x, n, and p are valid float number, n >=x and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.p === -1 || this.x === -1 || this.n === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    if (this.checkNXValue() === false) {
      this.error1.value = 'x must be less than or equal n';
      this.error2.value = '!';
      return false;
    }
    this.error1.value = '✔';
    this.error2.value = '✔';
    return true;
  }

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '';
    document.getElementById('n').value = '';
    document.getElementById('p').value = '';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('error3').value = '';
    document.getElementById('result').value = '';
    this.n = -1;
    this.p = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}
