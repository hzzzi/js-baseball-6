import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants.js';

const OutputView = {
  GameStart() {
    Console.print(MESSAGES.Game.Start);
  },
  ball(ball) {
    Console.print(`${ball}볼`);
  },
  strike(strike) {
    Console.print(`${strike}스트라이크`);
  },
  ballAndStrike(ball, strike) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  },
  nothing() {
    Console.print(`낫싱`);
  },
  GameSuccess() {
    Console.print(MESSAGES.Game.Success);
  },
  GameEnd() {
    Console.print(MESSAGES.Game.End);
  },
};

export default OutputView;
