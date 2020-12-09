describe('Test for Correctness', function () {
  describe('CLASS:  Binomial', function () {
    const b = new Binomial();
    describe('Function:  checkX()', function () {
      it('when x=4.5, checkX() should return false', function () {
        b.x = '4.5';
        this.slow(-1);
        chai.expect(b.checkX()).to.be.false;
      });
      it('when x=7, checkX() should return true', function () {
        b.x = '7';
        this.slow(-1);
        chai.expect(b.checkX()).to.be.true;
      });
    });
    describe('Function:  checkN()', function () {
      it('when n=3.5, checkN() should return error 2 - n is not decimal', function () {
        b.n = '3.5';
        this.slow(-1);
        chai.expect(b.checkN()).to.equal(2);
      });
      it('when n=0, checkN() should return error 1 - n is zero', function () {
        b.n = 0;
        this.slow(-1);
        chai.expect(b.checkN()).to.equal(1);
      });
      it('when x=7, checkX() should return 3 - n is valid', function () {
        b.n = '6';
        this.slow(-1);
        chai.expect(b.checkN()).to.equal(3);
      });
    });
    describe('Function:  checkP()', function () {
      it('when n=3, checkP() should return error 1 - p > 1', function () {
        b.p = 3;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(1);
      });
      it('when n=0.5, checkP() should return 3 - p is valid', function () {
        b.p = 0.5;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(3);
      });
    });
    describe('Function:  binomialFormula()', function () {
      it('when n=5, x=2, p=0.9, binomialFormula() should return 0.00810', function () {
        b.p = 0.9;
        b.n = 5;
        b.x = 2;
        this.slow(-1);
        chai.expect(b.binomialFormula().toFixed(5)).to.equal('0.00810');
      });
    });
  });
});