let getAllSelectors = function () {
    return {
        firstNumber: element(by.model('first')),
        secondNumber: element(by.model('second')),
        goButton: element(by.id('gobutton')),
        latestResult: element(by.binding('latest')),
        addOperator: element(by.model('operator')).$('[value="ADDITION"]'),
        divideOperator: element(by.model('operator')).$('[value="DIVISION"]'),
        moduloOperator: element(by.model('operator')).$('[value="MODULO"]'),
        multiplyOperator: element(by.model('operator')).$('[value="MULTIPLICATION"]'),
        subtractOperator: element(by.model('operator')).$('[value="SUBTRACTION"]')
    }
}
module.exports = {
    getAllSelectors
};
