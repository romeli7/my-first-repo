new p5((p) => {
  class Star {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.brightness = p.random(100, 255);
      this.brightnessChange = p.random(1, 3);
    }
    twinkle() {
      this.brightness += this.brightnessChange;
      if (this.brightness > 255 || this.brightness < 100) {
        this.brightnessChange *= -1;
      }
    }
    display() {
      p.fill(220, 180, 255, this.brightness);
      p.noStroke();
      p.ellipse(this.x, this.y, this.size);
    }
  }

  let stars = [];

  p.setup = () => {
    let canvas = p.createCanvas(600, 300);
    canvas.parent('canvasContainer2');

    for (let i = 0; i < 60; i++) {
      stars.push(new Star(p.random(p.width), p.random(p.height), p.random(5, 15)));
    }
  };

  p.draw = () => {
    p.background(48, 20, 65);

    stars.forEach((star) => {
      star.twinkle();
      star.display();
    });
  };
});
