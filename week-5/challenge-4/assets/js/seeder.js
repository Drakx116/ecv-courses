class Seeder {
  generateNewDot = () => {
    const random = Math.floor(Math.random() * 10);

    return this.generateRandomDot(random);
  };

  generateRandomDot(random) {
    const dot = new Dot();

    let radius = 14;
    let color = COLOR.DEFAULT;

    switch (random) {
      case 7:
        radius = 12;
        color = COLOR.DOUBLE;
        break;
      case 8:
        radius = 10;
        color = COLOR.BONUS;
        break;
      case 9:
        radius = 14;
        color = COLOR.MALUS;
        break;
    }

    dot.radius = radius;
    dot.color = color;
    dot.pos.x = Math.floor(Math.random() * (WIDTH - 2*radius) + radius);
    dot.pos.y = Math.floor(Math.random() * (HEIGHT - 2*radius) + radius);

    return dot;
  }
}
