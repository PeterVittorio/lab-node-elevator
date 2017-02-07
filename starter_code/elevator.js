/*jshint esversion: 6*/

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [{Person}];
    this.direction = 'up';
  }

  start() {
  this.timer = setInterval(() => {this.update();},1000);
}

  stop() {
  clearInterval(this.timer);
  }

  update() {
  this.log();
  this.floorUp();
}
  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
    return this.floor += 1;
  } else {
    this.stop();
  }
}

  floorDown() {
    if (this.floor > 0) {
    return this.floor -= 1;
  } else {
    this.stop();
  }
}
  call() { }

  log() {
  console.log('Direction: '+ this.direction);
  console.log('Floor: '+ this.floor);
}
}


module.exports = Elevator;
