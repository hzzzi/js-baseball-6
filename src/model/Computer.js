import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME } from '../Constants.js';

class Computer {
  #answer;

  generateRandomNumber() {
    const computer = [];
    while (computer.length < GAME.Number.Digits) {
      const number = MissionUtils.Random.pickNumberInRange(
        GAME.Number.Range.Start,
        GAME.Number.Range.End,
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
      this.#answer = computer;
    }
  }

  compareNumber(input) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < input.length; i += 1) {
      if (this.#answer.includes(input[i]) && this.#answer[i] !== input[i]) {
        ball += 1;
      }
      if (this.#answer.includes(input[i]) && this.#answer[i] === input[i]) {
        strike += 1;
      }
    }
    return [ball, strike];
  }
}

export default Computer;
