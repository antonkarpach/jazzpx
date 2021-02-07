export default class gameFieldService {
  static getRandomCoordinates(isSmall) {
    let step = 30;
    let maxX = 20;
    let maxY = 18;
    if (isSmall) {
      maxX = 17;
      maxY = 15;
    }
    let x = Math.floor(Math.random() * maxX) * step;
    let y = Math.floor(Math.random() * maxY) * step
    return [x, y];
  };

  static keyCodeSwitch = (keyCode, callBack) => {
    switch (keyCode) {
      case 37:
        callBack(() => 'LEFT')
        break;
      case 38:
        callBack(() => 'UP');
        break;
      case 39:
        callBack(() => 'RIGHT');
        break;
      case 40:
        callBack(() => 'DOWN');
        break;
    }
  }

  static directionSwitch = (direction, dots) => {
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 30, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 30, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 30];
        break;
      case 'UP':
        head = [head[0], head[1] - 30];
        break;
    }
    return head;

  }
};
