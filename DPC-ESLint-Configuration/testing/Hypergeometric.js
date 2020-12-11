describe('Test for Correctness', function () {
  describe('CLASS:  Hypergeometric', function () {
    const temp = new Hypergeometric();
    describe('Function:  checkX()', function () {
      it('when input is 2.63, checkX should return false since it must be a decimal number', function () {
        this.slow(0);
        temp.x = '2.63';
        chai.expect(temp.checkX()).to.be.false;
      });
      it('when x=20, checkIfValidInput should return true', function () {
        temp.x = '20';
        this.slow(0);
        chai.expect(temp.checkX()).to.be.true;
      });
    });

    describe('Function: checkn()', function () {
      it('when n is 1.2, checkn should return 3(the false value for not being an integer) because in hypergeometric, n cannot be decimal', function () {
        temp.n = '1.2';
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(3);
      });
      it('when n is 0, checkn should return 2(the false value for n !>= x)', function () {
        temp.n = 0;
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(2);
      });
      it('when n is 21, checkn should return 1(the true value for n is integer and >= x) ', function () {
        temp.n = '21';
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(1);
      })
    });

    describe('Function: checkN()', function () {
      it('when N is 1.2, checkN should return 4(the false value for not being an integer)', function () {
        temp.N = '1.2';
        this.slow(0);
        chai.expect(temp.checkN()).to.equal(4);
      });
    });
  });
});
