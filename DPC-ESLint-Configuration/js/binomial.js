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
      binomial.checkX();
      break;
    case 2:// n
      binomial.checkN();
      break;
    case 3:// p
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
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      document.getElementById('result').disabled = false;
      const x = document.getElementById('x').value;
      const n = document.getElementById('n').value;
      const p = document.getElementById('p').value;
      const v1 = validate.Combination(n, x);
      const v2 = Math.pow(p, x);
      const v3 = Math.pow(1 - p, n - x);
      document.getElementById('result').value = (v1 * v2 * v3);
    } else {
      document.getElementById('result').value = 'Invalid Input';
    }
  }

  /**
   *Function: checkX()
   *  Rule: x value must be a valid float number
   *  Return:
   *    _if the rule has not been satisfied - print a red error message in the error box
   *    _else - print a check mark in the error box
   * */
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

  /**
   * Function: checkN()
   *  Rule: n value must be a valid float number, and n >= x
   *  Return:
   *    _if all rules have been satisfied - print a check mark in the error box
   *    _else - print the error message accordingly
   * */
  checkN() {
    const nValue = document.getElementById('n').value;
    const error = document.getElementById('error2');
    if (validate.checkIfValidInput(nValue) === true) {
      if (this.checkNXValue() === true) {
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
   * Function: checkNXValue()
   *  Rule: n >= x
   *  Return:
   *    _true - if n >= x
   *    _false - if n < x
   * */
  checkNXValue() { // n<=x
    const x = parseFloat(document.getElementById('x').value);
    const n = parseFloat(document.getElementById('n').value);
    return n >= x;
  }

  /**
   * Function: checkAll()
   *  Rules: x, n, and p are valid float number, n >=x and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.checkX() === true && this.checkN() === true && this.checkP() === true) {
      if (this.checkPValue() === true && this.checkNXValue() === true) {
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
    document.getElementById('n').value = '0';
    document.getElementById('p').value = '0';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('error3').value = '';
    document.getElementById('result').value = '';
  }
}
