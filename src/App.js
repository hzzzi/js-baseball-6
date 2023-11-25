import Controller from './Controller.js';

class App {
  static async play() {
    const controller = new Controller();
    await controller.process();
  }
}

export default App;
