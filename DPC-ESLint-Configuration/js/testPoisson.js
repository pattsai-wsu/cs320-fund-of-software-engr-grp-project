let poissonView; // instance of Poisson View class - using Model View Control design
let poissonController; // instance of Poisson Controller class - using Model View Control design
let poissonModel; // instance of Poisson Model class - using Model View Control design


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

  inputChangeX() {
    const x = document.getElementById('x').value;
    poissonController.validateInputX(x);
  }

  inputChangeLambda() {
    const lambda = document.getElementById('lambda').value;
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
    else {
      error2.style.color = 'red';
      error2.value = '  Input must be positive number';
      console.log("Lambda: Input must be a positve number");
    }
  }

  calculate() {
    const x = document.getElementById('x').value;
    const lambda = document.getElementById('lambda').value;
    let probabilityAns = poissonController.calculate(x,lambda);

    document.getElementById('result').value = probabilityAns ;
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
 *          validateInputX();
 *          validateInputLambda();
 *          checkLambda();
 *          checkAll();
 *          reset()
 * */
class PoissonController {
  constructor() {
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
    if(this.xInputVal.length > 0) {
      console.log("X value resolves true");
      poissonView.updateXInput(true);
    }
    else {
      console.log("X value resolves false");
      poissonView.updateXInput(false);
    }
  }

  validateInputLambda(lambda) {
    this.lambdaInputVal = lambda.toString();
    console.log("lambda length after passed to Controller" + this.lambdaInputVal.length);
    for (let i = 0; i < this.lambdaInputVal.length; i++) { // loop to run through each character of the input
      if ((this.lambdaInputVal.charCodeAt(i) < 48 || this.lambdaInputVal.charCodeAt(i) > 57) && this.lambdaInputVal.charCodeAt(i) !== 46) {
        console.log("lambda value resolves false");
        poissonView.updateLambdaInput(false);
        return;
      }
    }
    if(this.lambdaInputVal.length > 0) {
      console.log("Lambda value resolves true");
      poissonView.updateLambdaInput(true);
    }
    else {
      console.log("lambda value resolves false");
      poissonView.updateLambdaInput(false);
    }
  }

  calculate(x,lambda){
    let ans = poissonModel.calculate(x,lambda);
    return ans;
  }

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