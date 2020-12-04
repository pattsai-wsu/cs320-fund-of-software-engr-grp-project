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
      nBinomial.checkX();
      break;
    case 2:// k
      nBinomial.checkK();
      break;
    case 3:// p
      nBinomial.checkP();
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
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Negative Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      document.getElementById('result').disabled = false;
      const x = document.getElementById('x').value;
      const k = document.getElementById('k').value;
      const p = document.getElementById('p').value;
      const v1 = validate.Combination(x - 1, k - 1);
      const v2 = Math.pow(p, k);
      const v3 = Math.pow(1 - p, x - k);
      document.getElementById('result').value = (v1 * v2 * v3);
    } else {
      document.getElementById('result').value = 'Invalid Input';
    }
  }

  /**
   *Function: checkX()
   *  Rule: x value must be a valid float number and x>=1
   *  Return:
   *    _if the rule has not been satisfied - print a red error message in the error box
   *    _else - print a check mark in the error box
   * */
  checkX() {
    const xValue = document.getElementById('x').value;
    const error = document.getElementById('error1');
    if (validate.checkIfValidInput(xValue) === true) { // valid for X
      if (xValue >= 1) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      }
      error.style.color = 'red';
      error.value = '  Input must be at less 1';
      return false;
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
    return false;
  }

  /**
   * Function: checkK()
   *  Rule: k value must be a valid float number, and k <= x
   *  Return:
   *    _if all rules have been satisfied - print a check mark in the error box
   *    _else - print the error message accordingly
   * */
  checkK() {
    const nValue = document.getElementById('k').value;
    const error = document.getElementById('error2');
    if (validate.checkIfValidInput(nValue) === true) {
      if (this.checkKXValue() === true) {
        error.style.color = 'green';
        error.value = '  ✔';
        return true;
      }
      error.style.color = 'red';
      error.value = '  k must be less than or equal to x';
      return false;
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
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
    const pValue = document.getElementById('p').value;
    const error = document.getElementById('error3');
    if (validate.checkIfValidInput(pValue) === true) {
      if (this.checkPValue() === true) {
        error.style.color = 'green';
        error.value = '✔';
        return true;
      }
      error.style.color = 'red';
      error.value = '  p must between 1 and 0';
      return false;
    }
    error.style.color = 'red';
    error.value = '  Input must be valid';
    return false;
  }

  /**
   * Function: checkPValue()
   *  Rule: p=[0,1]
   *  Return:
   *    _true - if p<=1 and p>=0
   *    _false - if p>1 or p<0
   * */
  checkPValue() {
    const p = document.getElementById('p').value;
    return !(p > 1 || p < 0);
  }

  /**
   * Function: checkKXValue()
   *  Rule: k <= x
   *  Return:
   *    _true - if k <= x
   *    _false - if k > x
   * */
  checkKXValue() { // k<=x
    const x = parseFloat(document.getElementById('x').value);
    const k = parseFloat(document.getElementById('k').value);
    return k <= x;
  }

  /**
   * Function: checkAll()
   *  Rules: x, k, and p are valid float number, x>=1, k<=x and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.checkX() === true && this.checkK() === true && this.checkP() === true) {
      if (this.checkPValue() === true && this.checkKXValue() === true) {
        return true;
      }
    }
    return false;
  }

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '0';
    document.getElementById('k').value = '0';
    document.getElementById('p').value = '0';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('error3').value = '';
    document.getElementById('result').value = '';
  }
}
