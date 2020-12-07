let poissonView; // instance of Poisson View class - using Model View Control design
let poissonController; // instance of Poisson Controller class - using Model View Control design
let poissonModel; // instance of Poisson Model class - using Model View Control design
let validate; // instance of ValidateInput class

/**
 *Function: callPoissonInit- create an instance for each class Model, View, Control
 * */
function callPoissonInit() {
  poissonView = new PoissonView();
  poissonController = new PoissonController();
  poissonModel = new PoissonModel();
}

/**
 *Class: Poisson View - this will be an observer and update when the model updates
 *consists of:
 *          constructor();
 *          updateView()
 * */
class PoissonView {
  constructor() {
  }

  inputChange() {
    const x = parseFloat(document.getElementById('x').value);
    const lambda = parseFloat(document.getElementById('lambda').value);
    let xValidate = poissonController.validateInputX(x);
    let lambdaValidate = poissonController.validateInputLambda(lambda);

  }

  updateView() {

  }
}

/**
 *Class: Poisson Controller - all methods that binomial will be needed
 *consists of:
 *          constructor();
 *          calculate();
 *          checkX();
 *          checkLambda();
 *          checkAll();
 *          reset()
 * */
class PoissonController {
  constructor() {
  }

  validateInputX(x) {
    this.x = x;
    if(Number.isInteger(x) && x>0) {
      return true;
    }
  }

  validateInputLambda(lambda) {
    this.lambda = lambda;
    if(Number.isNaN(lambda) && lambda>0) {
      return true;
    }
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Poisson and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      document.getElementById('result').disabled = false;
      const x = document.getElementById('x').value;
      const lambda = document.getElementById('lambda').value;
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
  checkLambda() {
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
