function hexToHSL(H, off) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  // return "hsl(" + h + "," + s + "%," + l + "%)";
  return "hsl(" + off + "," + s + "%," + l + "%)";
}

function replaceHue(color, change) {
  const items = color
    .split("(")[1]
    .split(")")[0]
    .split(",");
  return "hsl(" + change + "," + items[1] + "," + items[2] + ")";
}

function changeColor(color, off) {
  if (color[0] == "#") {
    return hexToHSL(color, off);
  } else {
    return replaceHue(color, off);
  }
}

const gs = document
  .getElementsByClassName("js-calendar-graph-svg")[0]
  .getElementsByTagName("g")[0]
  .getElementsByTagName("g");

let rects = [];
Array.from(gs).forEach(g => {
  rects = [...rects, ...Array.from(g.getElementsByTagName("rect"))];
});
const legends = Array.from(
  document
    .getElementsByClassName("contrib-legend")[0]
    .getElementsByClassName("legend")[0]
    .getElementsByTagName("li")
);

var counter = 0;
setInterval(() => {
  rects.forEach(r => {
    r.setAttribute("fill", changeColor(r.attributes.fill.value, counter));
  });
  legends.forEach(l => {
    l.setAttribute(
      "style",
      "background-color: " + changeColor(l.attributes.style.value.split(" ")[1], counter)
    );
  });
  counter += 10;
  if (counter == 360) counter = 0;
}, 1);