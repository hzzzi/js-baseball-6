import { ERROR } from '../src/Constants.js';
import Validator from '../src/Validator.js';

describe('숫자 입력 테스트', () => {
  test('입력값이 없으면 예외 발생', () => {
    expect(() => {
      Validator.isNothing('');
    }).toThrow(ERROR.Nothing);
  });

  test('입력값이 숫자가 아니면 예외 발생', () => {
    expect(() => {
      const input = ['a', '1a', '-', ';'];
      input.forEach((element) => {
        Validator.isNumber(element);
      });
    }).toThrow(ERROR.NotNumber);
  });

  test('입력값이 세 자리 수가 아니면 예외 발생', () => {
    expect(() => {
      const input = ['1234', '12', '1'];
      input.forEach((element) => {
        Validator.isThreeDigits(element);
      });
    }).toThrow(ERROR.Digits);
  });

  test('입력값이 중복되면 예외 발생', () => {
    expect(() => {
      const input = ['111', '242', '772'];
      input.forEach((element) => {
        Validator.isDuplicated(element);
      });
    }).toThrow(ERROR.Duplicated);
  });
});
