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
}

export default Computer;
