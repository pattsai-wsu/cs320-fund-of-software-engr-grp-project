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
  validate = new ValidateInput();
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

  inputChangeAll() {
    const x = parseFloat(document.getElementById('x').value);
    const lambda = parseFloat(document.getElementById('lambda').value);
    poissonController.checkAllInputs(x,lambda);
  }

  inputChangeX() {
    const x = document.getElementById('x').value;
    console.log("x value:" + x);
    console.log("x length:" + x.toString().length);
    poissonController.validateInputX(x);
  }

  inputChangeLambda() {
    const lambda = parseFloat(document.getElementById('lambda').value);
    poissonController.validateInputLambda(lambda);
  }

  updateCalculateButton(isTrue) {
    if(isTrue === true) {
      document.getElementById('result').disabled = false;
      //console.log("calculate button enabled");
    }
    else {
      document.getElementById('result').disabled = true;
      //console.log("calculate button disabled");
    }
  }

  updateXInput(isXInputTrue) {
    const error1 = document.getElementById('error1');
    if(isXInputTrue === true) {
      error1.style.color = 'green';
      error1.value = '  ✔';
      console.log("X: Yes, you entered a positive integer");
    }
    else {
      error1.style.color = 'red';
      error1.value = '  Input must be positive Integer';
      console.log("X: Input must be positive integer");
    }
  }

  updateLambdaInput(isLambdaInputTrue) {
    const error2 = document.getElementById('error2');
    if(isLambdaInputTrue === true) {
      error2.style.color = 'green';
      error2.value = '  ✔';
      console.log("Lambda: Yes, you entered a positive number");
    }
    else if (isLambdaInputTrue === false) {
      error2.style.color = 'red';
      error2.value = '  Input must be positive number';
      console.log("Lambda: Input must be a positve number");
    }
    else {
      document.getElementById('error2').value = '';
    }
  }

  calculate() {
    poissonView.inputChangeAll();
    let isCalculateTrue = document.getElementById('result').disabled;
    if(isCalculateTrue === true) {
      document.getElementById('result').value = 'Invalid Input';
    }
    else {

    }
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
  checkAllInputs(x,lambda) {
    this.xVal = x;
    this.lambdaVal = lambda;
    let xValidate;
    let lambdaValidate;
    let xNotNull;
    let lambdaNotNull;

    if(this.xVal !== "") {
      xNotNull = true;
      console.log("X NotNull true");
    }
    else {
      console.log("X NotNull false");
      xNotNull = false;
    }

    if(this.lambdaVal !== "") {
      console.log("Lambda NotNull true");
      lambdaNotNull = true;
    }
    else {
      console.log("Lambda NotNull false");
      lambdaNotNull = false;
    }

    console.log("x value: " + x);
    console.log("lambda value: " + lambda);
    if(x !== "") {
      xValidate = poissonController.validateInputX(this.xVal);
      //console.log("x input is: " + this.xValidate);
    }

    if(lambda !== "") {
      lambdaValidate = poissonController.validateInputLambda(this.lambdaVal);
      //console.log("lambda input is: " + this.lambdaValidate);
    }

    if(xNotNull === true && lambdaNotNull === true) {
      if (this.xValidate === true && this.lambdaValidate === true) {
        poissonView.updateCalculateButton(true);
      } else {
        poissonView.updateCalculateButton(false);
      }
    }
    else {
      poissonView.updateCalculateButton(false);
    }
  }

  validateInputX(x) {
    this.xInputVal = x.toString();
    console.log("X length after passed to Controller" + this.xInputVal.length);

    for (let i = 0; i < this.xInputVal.length; i++) { // loop to run through each character of the input
      if (this.xInputVal.charCodeAt(i) < 48 || this.xInputVal.charCodeAt(i) > 57) {
        console.log("X value resolves false");
        poissonView.updateXInput(false);
        return;
      }
    }
    console.log("X value resolves true");
    poissonView.updateXInput(true);

    /*
    this.xInputVal = x;
    if (Number.isInteger(this.xInputVal) && this.xInputVal > 0) {
      console.log("X value resolves true");
      poissonView.updateXInput(true);
    }
    else {
      console.log("X value resolves false");
      poissonView.updateXInput(false);
    }
     */
  }

  validateInputLambda(lambda) {
    this.lambdaInputVal = lambda;
      if (!Number.isNaN(parseFloat(this.lambdaInputVal)) && this.lambdaInputVal > 0) {
        console.log("Lambda value resolves true");
        poissonView.updateLambdaInput(true);
      } else {
        console.log("Lambda value resolves false");
        poissonView.updateLambdaInput(false);
      }
  }

  calculate(){}

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '0';
    document.getElementById('lambda').value = '0';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('result').value = '';
  }
}

class PoissonModel {
  constructor() {
  }
  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Poisson and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate(x,lambda) {
      //const x = document.getElementById('x').value;
      //const lambda = document.getElementById('lambda').value;
      //document.getElementById('result').value = (v1 * v2 * v3);
    this.x=x;
    this.lambda=lambda;
    let sum = this.x + this.lambda;
    console.log(sum);
    return (sum);
  }
}
/*
let x = 4;
let lambda = 15.3;
callPoissonInit();
poissonView.inputChange(x,lambda);
poissonModel.calculate(x,lambda);
*/