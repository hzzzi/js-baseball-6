import { ERROR } from './Constants.js';

const Validator = {
  isNothing(input) {
    if (input === '') {
      throw new Error(ERROR.Nothing);
    }
  },
  isNumber(input) {
    if (isNaN(Number(input))) {
      throw new Error(ERROR.NotNumber);
    }
  },
  isThreeDigits(input) {
    if (input.length !== 3) {
      throw new Error(ERROR.Digits);
    }
  },
  isDuplicated(input) {
    if (
      input[0] === input[1] ||
      input[0] === input[2] ||
      input[1] === input[2]
    ) {
      throw new Error(ERROR.Duplicated);
    }
  },
};

export default Validator;
