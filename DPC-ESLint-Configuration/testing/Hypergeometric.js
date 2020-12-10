describe('Test for Correctness', function () {
    describe('CLASS:  Hypergeometric', function () {
        const temp = new Hypergeometric();
        describe('Function:  checkX()', function () {
            it('when x=2.63, checkX() should return false since it must be a decimal number', function () {
                temp.x = '2.63';
                this.slow(0);
                chai.expect(temp.checkX()).to.be.false;
            });
            it('when x=10, checkX() should return true', function () {
                temp.x = '10';
                this.slow(0);
                chai.expect(temp.checkX()).to.be.true;
            });
        });
    });
});


