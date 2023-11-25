import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Computer from './model/Computer.js';
import Validator from './Validator.js';

class Controller {
  validateInput(input) {
    Validator.isNothing(input);
    Validator.isNumber(input);
    Validator.isThreeDigits(input);
    Validator.isDuplicated(input);
  }

  async getInput() {
    const input = await InputView.readNumber();
    this.validateInput(input);
    return input;
  }

  makeInputToArray(input) {
    const numberArray = input.split('').map(Number);
    return numberArray;
  }

  showResult(ball, strike) {
    if (ball !== 0 || strike !== 0) {
      const isBall = ball !== 0 ? OutputView.ball(ball) : '';
      const isStrike = strike !== 0 ? OutputView.strike(strike) : '';
      return isBall + isStrike;
    }
    OutputView.nothing();
  }

  async restartOrEnd() {
    const input = await InputView.restartOrEnd();
    if (input === '1') {
      this.playing();
    }
    if (input === '2') {
      OutputView.GameEnd();
    }
  }

  async playing() {
    const computer = new Computer();
    computer.generateRandomNumber();

    while (true) {
      const input = await this.getInput();
      const numberArray = this.makeInputToArray(input);
      const [ball, strike] = computer.compareNumber(numberArray);

      if (strike === 3) {
        break;
      }
      this.showResult(ball, strike);
    }

    OutputView.GameSuccess();
    this.restartOrEnd();
  }

  async process() {
    OutputView.GameStart();
    await this.playing();
  }
}

export default Controller;
