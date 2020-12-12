describe('Test for Correctness', function () {
    describe('CLASS:  ValidateInput', function () {
        const temp = new ValidateInput();
        describe('Function:  checkX()', function () {
            it('when input is 2.63, checkIfValidInput should return false since it must be a decimal number', function () {
                this.slow(0);
                chai.expect(temp.checkIfValidInput('31fwef')).to.be.false;
            });
            it('when x=10, checkIfValidInput should return true', function () {
                this.slow(0);
                chai.expect(temp.checkIfValidInput('10')).to.be.true;
            });
        });
    });
});


