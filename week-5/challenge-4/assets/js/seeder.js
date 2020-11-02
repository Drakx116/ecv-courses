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
        type = TYPE.BONUS;
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
    let color = COLOR.DEFAULT;
    let points = POINTS.DEFAULT;
    let radius = RADIUS.DEFAULT;

    switch (type) {
      case TYPE.DOUBLE:
        color = COLOR.DOUBLE;
        points = POINTS.DOUBLE;
        radius = RADIUS.DOUBLE;
        break;
      case TYPE.BONUS:
        color = COLOR.BONUS;
        points = POINTS.BONUS;
        radius = RADIUS.BONUS;
        break;
      case TYPE.MALUS:
        color = COLOR.MALUS;
        points = POINTS.MALUS;
        radius = RADIUS.MALUS;
        break;
    }

    dot.color = color;
    dot.points = points;
    dot.radius = radius;
    dot.pos.x = Math.floor(Math.random() * (WIDTH - 2*radius) + radius);
    dot.pos.y = Math.floor(Math.random() * (HEIGHT - 2*radius) + radius);

    return dot;
  }
}
