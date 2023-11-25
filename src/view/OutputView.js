import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants.js';

const OutputView = {
  GameStart() {
    Console.print(MESSAGES.Game.Start);
  },
  ball(ball) {
    Console.print(ball + MESSAGES.Result.Ball);
  },
  strike(strike) {
    Console.print(strike + MESSAGES.Result.Strike);
  },
  nothing() {
    Console.print(MESSAGES.Result.Nothing);
  },
  GameSuccess() {
    Console.print(MESSAGES.Game.Success);
  },
};

export default OutputView;
