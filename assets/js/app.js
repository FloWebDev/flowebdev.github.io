const app = {
  index: 0,
  models: {
    squid: [
      'xxxxxxxxx',
      'xx-----xx',
      'xx-8-8-xx',
      'x-------x',
      'xx-x-x-xx',
      'x-xx-xx-x',
      'xxxxxxxxx'
    ],
    crap: [
      '---------',
      '---x-x---',
      '--xxxxx--',
      '--xoxox--',
      '-xxxxxxx-',
      '-x-x-x-x-',
      '---------'
    ],
    space: [
      '-----------',
      '----x-x----',
      '---xxxxx---',
      '--xx-x-xx--',
      '---xoxox---',
      '--xxxxxxx--',
      '-x-x---x-x-',
      '----x-x----',
      '-----------',
    ],
    ghost: [
      '----------------',
      '------oooo------',
      '----oooooooo----',
      '---oooooooooo---',
      '--ooo--oooo--o--',
      '--oo----oo------',
      '--oo--88oo--88--',
      '-ooo--88oo--88o-',
      '-oooo--oooo--oo-',
      '-oooooooooooooo-',
      '-oooooooooooooo-',
      '-oooooooooooooo-',
      '-oooooooooooooo-',
      '-oo-ooo--ooo-oo-',
      '-o---oo--oo---o-',
      '----------------',
    ],
    deadhead: [
      '---------',
      '-x-xxx-x-',
      '--xxxxx--',
      '--xoxox--',
      '--xxxxx--',
      '-x-xxx-x-',
      '---------'
    ],
    myth: [
      'xxxxxxxxxxxxx',
      'xxx-xxxxx-xxx',
      'xxxx-xxx-xxxx',
      'xxx-------xxx',
      'xx--x---x--xx',
      'x-----------x',
      'x-x-------x-x',
      'x-x-xxxxx-x-x',
      'xxxx--x--xxxx',
      'xxxxxxxxxxxxx',
    ],
    surprise: [
      '--------------',
      '-----xxxx-----',
      '---xxooooxx---',
      '--xoo-ooooox--',
      '--xo---oooox--',
      '-xooo-oooooox-',
      '-xooooxxoooox-',
      '-xxoox--xooxx-',
      '-x-xxx--xxx-x-',
      '--x---xx---x--',
      '--x--------x--',
      '---xx----xx---',
      '-----xxxx-----',
      '--------------',
    ],
    mario: [
      '-------------',
      '---oooo------',
      '--oooooooo---',
      '--xxxbbxb----',
      '-xbxbbbxbbb--',
      '-xbxxbbbxbbx-',
      '-xxbbbbxxxx--',
      '---bbbbbbb---',
      '---oo8ooo----',
      '-ooo8oo8ooo--',
    ],
    pika: [
      '------------------------',
      '-xxx----------------xxx-',
      '-xxxx--------------xxxx-',
      '-xx--x------------x--xx-',
      '--x---x--xxxxxx--x---x--',
      '---x---xx------xx---x---',
      '----x-x----------x-x----',
      '----xx------------xx----',
      '---x------x----x----x---',
      '---x-----xx---xx----x---',
      '---x----------------x---',
      '---x--oo--xxxx--oo--x---',
      '---x--oo--------oo--x---',
      '---x---xxxxxxxxxx---x---',
      '----xxx----------xxx----',
      '------------------------',
      '------------------------',
    ]
  },
  labels: [],
  types: {
    '-': 'empty',
    'x': 'plain',
    'o': 'light',
    '8': 'highlight',
    'b': 'skin',
  },
  init: () => {
    app.helloWorld();
    app.handleDynamicShadowPicture();
    app.setFullYear();
    app.handlePixelArt();
  },
  helloWorld: () => {
    console.log('Hello World! ¯\\_(ツ)_/¯')
  },
  handleDynamicShadowPicture: () => {
    const select = function (s) {
      return document.querySelector(s);
    }

    function randomBetween(min, max) {
      const number = Math.floor(Math.random() * (max - min + 1) + min);

      if (number !== 0) {
        return number;
      } else {
        return 0.5;
      }
    }

    const tl = new TimelineMax();

    for (let i = 0; i < 10; i++) {

      const t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
        x: randomBetween(12, 15) * (randomBetween(-1, 1)),
        y: randomBetween(12, 15) * (randomBetween(-1, 1)),
        repeat: -1,
        repeatDelay: randomBetween(0.2, 0.5),
        yoyo: true,
        ease: Elastic.easeOut.config(1, 0.5)
      })

      tl.add(t, (i + 1) / 0.6)
    }

    tl.seek(50);
  },
  setFullYear: () => {
    document.querySelector('#currentYear').textContent = new Date().getFullYear()

  },
  handlePixelArt: () => {
    app.labels = Object.keys(app.models);
    app.index = Math.floor(Math.random() * ((app.labels.length - 1) - 0 + 1)) + 0;
    app.readModel();
    setInterval(app.readModel, 5000);
  },
  readModel: () => {
    app.generatePixelArt(app.models[app.labels[app.index]]);
    app.index = app.labels[app.index + 1] ? app.index + 1 : 0;

  },
  generatePixelArt: (data) => {
    // Container
    const container = document.querySelector('#pixelArt');
    container.innerHTML = '';

    // Line
    data.forEach(ln => {
      const line = document.createElement('div');
      line.style.height = (100 / data.length) + '%';
      line.classList.add('pixel_line');

      // Pixel
      ln.split('').forEach(px => {
        let square = document.createElement('div');
        square.classList.add('square', 'square--' + app.types[px]);
        square.style.width = (100 / ln.length) + '%';
        square.style.height = '100%';
        line.append(square);
      });
      container.append(line);
    });
  }
};

document.addEventListener('DOMContentLoaded', app.init);