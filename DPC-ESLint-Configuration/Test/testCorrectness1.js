// Class: ValidateInput

describe('Test for Correctness', function () {
  describe('CLASS:  ValidateInput', function () {
    const vi = new ValidateInput();
    describe('Function:  ValidateInput(value)', function () {
      it('checkIfValidInput(4.5) = true', function () {
        chai.expect(vi.checkIfValidInput(4.5)).to.be.true;
      });
      it('checkIfValidInput(2) = true', function () {
        chai.expect(vi.checkIfValidInput(2)).to.be.true;
      });
      it('checkIfValidInput(45.e) = false', function () {
        chai.expect(vi.checkIfValidInput('45.e')).to.be.false;
      });
      it('checkIfValidInput(25.) = false', function () {
        chai.expect(vi.checkIfValidInput('25.')).to.be.false;
      });
    });
    describe('Function:  checkIfValid(value)', function () {
      it('checkIfValid(45) = true', function () {
        chai.expect(vi.checkIfValid(45)).to.be.true;
      });
      it('checkIfValid(0.3e) = true', function () {
        chai.expect(vi.checkIfValid('0.3e')).to.be.true;
      });
      it('checkIfValid(we234) = false', function () {
        chai.expect(vi.checkIfValid('we234')).to.be.false;
      });
      it('checkIfValid(num) = false', function () {
        chai.expect(vi.checkIfValid('num')).to.be.false;
      });
    });
    describe('Function:   checkNumberOnly(value)', function () {
      it('checkNumberOnly(12) = true', function () {
        chai.expect(vi.checkNumberOnly(12)).to.be.true;
      });
      it('checkNumberOnly(12.3) = true', function () {
        chai.expect(vi.checkNumberOnly(12.3)).to.be.true;
      });
      it('checkNumberOnly(98.a) = false', function () {
        chai.expect(vi.checkNumberOnly('98.a')).to.be.false;
      });
      it('checkNumberOnly(.78) = true', function () {
        chai.expect(vi.checkNumberOnly('.78')).to.be.true;
      });
    });
    describe('Function:   Combination(n, r)', function () {
      it('Combination(10, 5) = 252', function () {
        chai.expect(vi.Combination(10, 5)).to.equal(252);
      });
    });
    describe('Function:   Factorial(n)', function () {
      it('Factorial(14) = 87178291200', function () {
        chai.expect(vi.Factorial(14)).to.equal(87178291200);
      });
    });
  });

  describe('CLASS:  Binomial', function () {
    const b = new Binomial();
    describe('Function:  checkX()', function () {
      it('when x=4.5, checkX() should return false', function () {
        chai.expect(b.checkX()).to.be.false;
      });
      it('when x=7, checkX() should return true', function () {
        chai.expect(b.checkX()).to.be.true;
      });
    });
  });
});
