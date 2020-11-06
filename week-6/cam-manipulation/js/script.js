const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const image = document.getElementById('my-img');

const TYPES = {
  FULL: {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
  },
  DOUBLE: {
    HOT_AND_COLD: 'HOT_AND_COLD'
  }
}

const filter = (pixels, type) => {
  const total = pixels.data.length;

  for (let i = 0; i < total; i+=4) {
    let pixel = 1;
    switch (type) {
      case TYPES.FULL.RED:
        pixels.data[i] *= 2; break;
      case TYPES.FULL.GREEN:
        pixels.data[i+1] *= 2; break;
      case TYPES.FULL.BLUE:
        pixels.data[i+2] *= 2; break;

      case TYPES.DOUBLE.HOT_AND_COLD:
        pixel = getPixelValueFromDoubleFilter(i, total); break;
    }

    pixels.data[i] *= pixel;
  }

  return pixels;
};

const getPixelValueFromDoubleFilter = (i, total) => {
  return (i > total / 2) ? 1/2 : 2;
};

const draw = () => {
  const width = image.width;
  const height = image.height;

  canvas.width = width;
  canvas.height = height;

  context.drawImage(image, 0, 0, width, height);

  let pixels = context.getImageData(0, 0, width, height);

  pixels = filter(pixels, TYPES.FULL.BLUE);

  context.putImageData(pixels, 0, 0);
};

draw();
