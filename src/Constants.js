const MESSAGES = {
  Game: {
    Start: '숫자 야구 게임을 시작합니다.',
    Input: '숫자를 입력해주세요 :',
    Success: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RestartOrEnd: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    End: '게임을 종료합니다.',
  },
};

const GAME = {
  Number: {
    Range: {
      Start: 1,
      End: 9,
    },
    Digits: 3,
  },
};

export { MESSAGES, GAME };
