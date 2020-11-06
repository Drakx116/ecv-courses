const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const image = document.getElementById('my-img');
const width = image.width;
const height = image.height;

const video = document.getElementById("camera");
const allowedWebcam = document.getElementById('allow-webcam');

const TYPES = {
  DEFAULT: 'DEFAULT',
  FULL: {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
  },
  DOUBLE: {
    HOT_AND_COLD: 'HOT_AND_COLD'
  },
  SPECIAL: {
    WEBCAM: 'WEBCAM'
  }
}

const switchBetweenImageAndStream = () => {
  if (allowedWebcam.checked) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 400;
    canvas.height = 200;

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    .then(stream =>  {
      video.srcObject = stream;
      video.play();
    })
    .catch(error => {
      console.error('Cannot access webcam', error);
    });

    const timer = setInterval(() => {
      context.drawImage(video, 0, 0, 400, 200);
    }, 1000 / 144);
  }
  else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, width, height);
  }
}

const filter = (pixels, type) => {
  const total = pixels.data.length;

  for (let i = 0; i < total; i+=4) {
    switch (type) {
      case TYPES.DEFAULT: pixels.data[i] *= 1; break;

      case TYPES.FULL.RED:
        pixels.data[i] *= 2; break;
      case TYPES.FULL.GREEN:
        pixels.data[i+1] *= 2; break;
      case TYPES.FULL.BLUE:
        pixels.data[i+2] *= 2; break;

      case TYPES.DOUBLE.HOT_AND_COLD:
        pixels.data[i] *= (i > total / 2) ? 1/2 : 2; break;
    }
  }

  return pixels;
};

const draw = type => {
  const width = image.width;
  const height = image.height;

  canvas.width = width;
  canvas.height = height;

  // navigator.mediaDevices.getUserMedia({
  //   video: true,
  //   audio: false
  // })
  // .then(stream =>  {
  //   video.srcObject = stream;
  //   video.play();
  // })
  // .catch(error => {
  //   console.error('Cannot access webcam', error);
  // });

  // const timer = setInterval(() => {
    context.drawImage(image, 0, 0, width, height);
    // context.drawImage(video, 0, 0, 400, 200);
  // }, 1000 / 144);

  let pixels = context.getImageData(0, 0, width, height);

  pixels = filter(pixels, type);

  context.putImageData(pixels, 0, 0);
};

const getFilterType = id => {
  switch (id){
    case 'red': return TYPES.FULL.RED;
    case 'green': return TYPES.FULL.GREEN;
    case 'blue': return TYPES.FULL.BLUE;
    case 'hot-and-cold': return TYPES.DOUBLE.HOT_AND_COLD;
    case 'video': return TYPES.SPECIAL.WEBCAM;

    default: return TYPES.DEFAULT;
  }
};

const filters = document.querySelectorAll("input[name=filter]");
filters.forEach(filter => {
  filter.addEventListener('change', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const type = getFilterType(filter.id);
    draw(type);
  });
});

allowedWebcam.addEventListener('change', () => {
  switchBetweenImageAndStream();
});

draw(TYPES.DEFAULT);
