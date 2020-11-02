class Seeder {
  generateNewDot = () => {
    const random = Math.floor(Math.random() * 10);

    return this.generateRandomDot(random);
  };

  generateRandomDot(random) {
    let type = TYPE.DEFAULT;

    switch (random) {
      case 7:
        type = TYPE.DOUBLE;
        break;
      case 8:
        type = COLOR.BONUS;
        break;
      case 9:
        type = TYPE.MALUS;
        break;
    }

    return this.initializeDotByType(type);
  }

  initializeDotByType(type) {
    const dot = new Dot();

    // Default values
    let radius = RADIUS.DEFAULT;
    let color = COLOR.DEFAULT;

    switch (type) {
      case TYPE.DOUBLE:
        radius = RADIUS.DOUBLE;
        color = COLOR.DOUBLE;
        break;
      case 8:
        radius = RADIUS.DOUBLE;
        color = COLOR.BONUS;
        break;
      case 9:
        radius = RADIUS.MALUS;
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
