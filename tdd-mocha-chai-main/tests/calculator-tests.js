const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => { calculator = new Calculator });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });

    it("Deve resultar na soma de 103", () => {
      expect(calculator.sum(89, 14)).to.equal(103);
      expect(calculator.sum(8, 8)).to.not.be.equal(103);
    });
  
    it("Deve resultar na subtração de 110", () => {
      expect(calculator.sub(765, 655)).to.equal(110);
      expect(calculator.sub(765, 655)).to.not.be.null;
    });

    it("Deve resultar na multiplicação de 1024", () => {
      expect(calculator.mult(128, 8)).to.equal(1024);
      expect(calculator.mult(128, 8)).to.lessThanOrEqual(2048);
    });

    it("Deve resultar na divisão de 32", () => {
      expect(calculator.div(16384, 512)).to.equal(32)
      expect(calculator.div(16384, 512)).to.below(64)
      expect(calculator.sub(16384, 512)).to.be.a('number')
    })
    
    it("Deve resultar na exponencial de 4096", () => {
      expect(calculator.exp(8, 4)).to.be.equal(4096)
    })
    
    it("Deve resultar em decimal de 0.21", () => {
      expect(calculator.sub(55.78, 32.57)).to.not.be.equal(23)
      expect(calculator.sub(55.78, 32.57)).to.be.a('number')
      expect(calculator.sub(55.78, 32.57) % 1).to.not.be.equal(0)
    })
});



//expect(foo % 1).to.equal(0)