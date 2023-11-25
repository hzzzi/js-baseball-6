import Controller from './Controller.js';

class App {
  async play() {
    const controller = new Controller();
    controller.process();
  }
}

const app = new App();
app.play();

export default App;
