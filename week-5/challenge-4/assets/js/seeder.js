class Seeder {
  generateNewDot = () => {
    const dot = new Dot();

    dot.pos.x = Math.floor(Math.random() * (WIDTH - RADIUS - RADIUS) + RADIUS);
    dot.pos.y = Math.floor(Math.random() * (HEIGHT - RADIUS - RADIUS) + RADIUS);

    return dot;
  };
}
