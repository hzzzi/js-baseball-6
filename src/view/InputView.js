import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants.js';

const InputView = {
  async readNumber() {
    const input = await Console.readLineAsync(MESSAGES.Game.Input);
    return input;
  },
  async restartOrEnd() {
    const input = await Console.readLineAsync(MESSAGES.Game.RestartOrEnd);
    return input;
  },
};

export default InputView;
