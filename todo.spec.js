const {getAllSelectors} = require('./selectors');
let allSelectors;
describe('Protractor Demo', function () {
  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    allSelectors = getAllSelectors();
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Super Calculator');
    browser.sleep(1000);
  });

  it('should add one and two', function () {
    allSelectors.firstNumber.sendKeys(1);
    allSelectors.secondNumber.sendKeys(2);

    allSelectors.goButton.click();
    browser.sleep(1000);

    expect(allSelectors.latestResult.getText()).toEqual('3');
  });

  it('should modulo two numbers', function () {
    allSelectors.firstNumber.sendKeys(25);
    allSelectors.moduloOperator.click();
    allSelectors.secondNumber.sendKeys(2);

    allSelectors.goButton.click();
    browser.sleep(1000);

    expect(allSelectors.latestResult.getText()).toEqual('1');
  });

  it('should divide two numbers', function () {
    allSelectors.firstNumber.sendKeys(15);
    allSelectors.divideOperator.click();
    allSelectors.secondNumber.sendKeys(3);

    allSelectors.goButton.click();
    browser.sleep(1000);

    expect(allSelectors.latestResult.getText()).toEqual('5');
  });

  it('should multiply two numbers', function () {
    allSelectors.firstNumber.sendKeys(7);
    allSelectors.multiplyOperator.click();
    allSelectors.secondNumber.sendKeys(12);

    allSelectors.goButton.click();
    browser.sleep(1000);

    expect(allSelectors.latestResult.getText()).toEqual('84');
  });

  it('should subtract two numbers', function () {
    allSelectors.firstNumber.sendKeys(100);
    allSelectors.subtractOperator.click();
    allSelectors.secondNumber.sendKeys(34);

    allSelectors.goButton.click();
    browser.sleep(2000);

    expect(allSelectors.latestResult.getText()).toEqual('66');
  });

  it('should add two numbers', function () {
    allSelectors.firstNumber.sendKeys(100);
    allSelectors.addOperator.click();
    allSelectors.secondNumber.sendKeys(100);

    allSelectors.goButton.click();
    browser.sleep(2000);

    expect(allSelectors.latestResult.getText()).toEqual('200');
  });
});