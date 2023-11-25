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
    const numberArray = input.split('').map(Number);
    return numberArray;
  }

  showResult(ball, strike) {
    if (ball !== 0 && strike === 0) {
      OutputView.ball(ball);
    }
    if (ball === 0 && strike !== 0) {
      OutputView.strike(strike);
    }
    if (ball !== 0 && strike !== 0) {
      OutputView.ballAndStrike(ball, strike);
    }
    if (ball === 0 && strike === 0) {
      OutputView.nothing();
    }
  }

  async restartOrEnd() {
    const input = await InputView.restartOrEnd();
    if (input === '1') {
      await this.playing();
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
      const [ball, strike] = computer.compareNumber(input);
      if (strike === 3) {
        break;
      }
      this.showResult(ball, strike);
    }
    OutputView.GameSuccess();
    await this.restartOrEnd();
  }

  async process() {
    OutputView.GameStart();
    await this.playing();
  }
}

export default Controller;
