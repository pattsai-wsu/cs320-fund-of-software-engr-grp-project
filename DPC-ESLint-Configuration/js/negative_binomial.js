let nBinomial; // instance of Binomial class
let validate; // instance of ValidateInput class

/**
 *Function: callNegativeBinomial(data)-call appropriate method of the Binomial class as needed
 * */
function callNegativeBinomial(num) {
  switch (num) {
    case 0:// on page load
      nBinomial = new NegativeBinomial();
      break;
    case 1:// x
      nBinomial.x = document.getElementById('x').value;
      nBinomial.verifyX();
      break;
    case 2:// k
      nBinomial.k = document.getElementById('k').value;
      nBinomial.verifyK();
      break;
    case 3:// p
      nBinomial.p = document.getElementById('p').value;
      nBinomial.verifyP();
      break;
    case 'reset':// reset button
      nBinomial.reset();
      break;
    case 'calculate':// result button
      nBinomial.calculate();
      break;
    default:
      break;
  }
}

/**
 *Class: NegativeBinomial - all methods that negative-binomial will be needed
 *consists of:
 *          constructor();
 *          calculate();
 *          checkX();
 *          checkK();
 *          checkP();
 *          checkPValue();
 *          checkKXValue();
 *          checkAll();
 *          reset();
 * */
class NegativeBinomial {
  constructor() {
    validate = new ValidateInput();
    this.x = -1;
    this.k = -1;
    this.p = -1;
    this.error1 = document.getElementById('error1');
    this.error2 = document.getElementById('error2');
    this.error3 = document.getElementById('error3');
    this.result = document.getElementById('result');
  }

  verifyX() {
    switch (this.checkX()) {
      case 1: // when x is less than 1
        this.x = -1;
        this.error1.style.color = 'red';
        this.error1.value = 'x must be at least 1';
        break;
      case 2: // when x is not valid Integer
        this.x = -1;
        this.error1.style.color = 'red';
        this.error1.value = 'Input must be valid Integer';
        break;
      default: // when x is valid
        this.error1.style.color = 'green';
        this.error1.value = '✔';
        break;
    }
  }

  verifyK() {
    if (this.checkK() === true) {
      this.error2.style.color = 'green';
      this.error2.value = '✔';
    } else {
      this.k = -1;
      this.error2.style.color = 'red';
      this.error2.value = 'Input must be valid Integer';
    }
  }

  verifyP() {
    switch (this.checkP()) {
      case 1: // when p is out of range
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'p must between 1 and 0';
        break;
      case 2: // when p is not valid
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'Input must be valid';
        break;
      default: // when p is valid
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        break;
    }
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Negative Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    this.x = document.getElementById('x').value;
    this.k = document.getElementById('k').value;
    this.p = document.getElementById('p').value;
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.negativeBinomialFormula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  /**
   *Function: negativeBinomialFormula() - computation of Negative Binomial
   * */
  negativeBinomialFormula() {
    const v1 = validate.Combination(this.x - 1, this.k - 1);
    const v2 = Math.pow(this.p, this.k);
    const v3 = Math.pow(1 - this.p, this.x - this.k);
    return (v1 * v2 * v3);
  }

  /**
   *Function: checkX()
   *  Rule: x value must be a valid float number and x>=1
   *  Return:
   *    _if the rule has not been satisfied - print a red error message in the error box
   *    _else - print a check mark in the error box
   * */
  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) {
      if (this.x < 1) return 1;
      return 3;
    }
    return 2;
  }

  /**
   * Function: checkK()
   *  Rule: k value must be a valid float number, and k <= x
   *  Return:
   *    _if all rules have been satisfied - print a check mark in the error box
   *    _else - print the error message accordingly
   * */
  checkK() {
    if (validate.checkIfValidInput(this.k) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
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
      if (this.p <= 1 && this.p >= 0) return 3;
      return 1;
    }
    return 2;
  }

  /**
   * Function: checkAll()
   *  Rules: x, k, and p are valid float number, x>=1, k<=x and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.p === -1 || this.x === -1 || this.k === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    if (this.k > this.x) {
      this.error2.value = 'k must be less than or equal x';
      this.error1.value = '!';
      return false;
    }
    this.error1.value = '✔';
    this.error2.value = '✔';
    this.error3.value = '✔';
    return true;
  }

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '';
    document.getElementById('k').value = '';
    document.getElementById('p').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.error3.value = '';
    this.result.value = '';
    this.k = -1;
    this.p = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}
