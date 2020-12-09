describe('Test for Correctness', function () {
  describe('CLASS:  Negative Binomial', function () {
    const b = new NegativeBinomial();
    describe('Function:  checkX()', function () {
      it('when n=3.5, checkX() should return error 2 - x is decimal', function () {
        b.x = '3.5';
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(2);
      });
      it('when n=0, checkX() should return error 1 - x is zero', function () {
        b.x = 0;
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(1);
      });
      it('when x=7, checkX() should return 3 - x is valid', function () {
        b.x = 7;
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(3);
      });
    });
    describe('Function:  checkK()', function () {
      it('when x=4.5, checkK() should return false - k is decimal', function () {
        b.k = '4.5';
        this.slow(-1);
        chai.expect(b.checkK()).to.be.false;
      });
      it('when x=0, checkK() should return true', function () {
        b.k = '0';
        this.slow(-1);
        chai.expect(b.checkK()).to.be.true;
      });
    });
    describe('Function:  checkP()', function () {
      it('when n=4, checkP() should return error 1 - p > 1', function () {
        b.p = 4;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(1);
      });
      it('when n=0.75, checkP() should return 3 - p is valid', function () {
        b.p = 0.75;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(3);
      });
    });
    describe('Function:  negativeBinomialFormula()', function () {
      it('when x=10, k=5, p=0.43, negativeBinomialFormula() should return 0.1114518037', function () {
        b.p = 0.43;
        b.k = 5;
        b.x = 10;
        this.slow(-1);
        chai.expect(b.negativeBinomialFormula().toFixed(10)).to.equal('0.1114518037');
      });
    });
  });
});