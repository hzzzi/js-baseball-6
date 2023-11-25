import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Computer from './model/Computer.js';

class Controller {
  static makeInputToArray(input) {
    return input.split('').map(Number);
  }

  static showResult(ball, strike) {
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
}

export default Controller;
