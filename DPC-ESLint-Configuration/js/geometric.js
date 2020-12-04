let geometric; // instance of Binomial class
let validate; // instance of ValidateInput class

function callGeometric(num) {
    switch (num) {
        case 0:// on page load
            geometric = new Geometric();
            break;
        case 1:// x
            geometric.checkX();
            break;
        case 2:// n
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

class Geometric {
    constructor() {
        validate = new ValidateInput();
    }

    calculate() {
        if (this.checkAll() === true) {
            document.getElementById('result').disabled = false;
            const x = document.getElementById('x').value;
            const p = document.getElementById('p').value;
            const temp1 = Math.pow(1 - p, x-1);
          //  const temp2 = p;
            document.getElementById('result').value = (temp1 * p);
        } else {
            document.getElementById('result').value = 'Invalid Input';
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

    checkP() {
        const pValue = document.getElementById('p').value;
        const error = document.getElementById('error2');
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

    checkPValue() {
        const p = document.getElementById('p').value;
        return !(p > 1 || p < 0);
    }

    checkAll() {
        if (this.checkX() === true && this.checkP() === true) {
            if (this.checkPValue() === true) {
                return true;
            }
        }
        return false;
    }
    reset() {
        document.getElementById('x').value = '0';
        document.getElementById('p').value = '0';
        document.getElementById('error1').value = '';
        document.getElementById('error2').value = '';
        document.getElementById('result').value = '';
    }
}
