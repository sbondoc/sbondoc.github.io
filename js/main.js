function randomRange(min, max) {
  const minClamp = Math.ceil(min);
  const maxClamp = Math.floor(max);
  return Math.floor(Math.random() * (maxClamp - minClamp + 1)) + minClamp;
}

function createCanvas() {
  canvas = document.createElement("div");
  document.body.appendChild(canvas);
  return canvas;
}

function getTarget() {
  const paragraphs = document.getElementsByTagName("p");
  return paragraphs[paragraphs.length - 1];
}

function getTargetLink(target) {
  return target.getElementsByTagName("a")[0];
}

function randomizeLeft() {
  return 0 === randomRange(0, 1);
}

function randomizeTop() {
  return 0 === randomRange(0, 1);
}

function main() {
  const redirectClickNumber = 3;
  const redirectLink = "https://sbondoc.github.io/sambondoc";
  const titles = [
    "Really?",
    "Seriously?",
    "Come on...",
    "You'll regret it..."
  ];
  var counter = 0;
  var canvas = createCanvas();
  var target = getTarget();
  var targetLink = getTargetLink(target);
  function randomizeLocation() {
    counter++;
    if (counter == 1) {
      canvas.appendChild(target);
      target.style.position = 'absolute';
    }
    if (counter == redirectClickNumber) {
      targetLink.href = redirectLink;
    }
    target.style.left = randomRange(0, 95) + '%';
    target.style.top = randomRange(0, 95) + '%';
    return targetLink.href !== '#';
  }
  function randomizeTitle() {
    targetLink.title = titles[randomRange(0, titles.length - 1)];
  }
  function onClick() {
    randomizeLocation();
    randomizeTitle();
  };
  randomizeTitle();
  targetLink.href = '#';
  targetLink.onclick = onClick;
}

window.addEventListener("DOMContentLoaded", main);
