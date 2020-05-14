const graph = document.getElementsByClassName("js-calendar-graph-svg")[0];
let rects = [];
const gs = document
  .getElementsByClassName("js-calendar-graph-svg")[0]
  .getElementsByTagName("g")[0]
  .getElementsByTagName("g");

Array.from(gs).forEach(g => {
  rects = [...rects, ...Array.from(g.getElementsByTagName("rect"))];
});

const symbols = {
  A: [2, 3, 4, 5, 8, 9],
  B: [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    20,
    23,
    24,
    27,
    30,
    31,
    34,
    37,
    38,
    41,
    44,
    45,
    47,
    49,
    51,
    53,
    57
  ]
};

const str = ["B"];

const blank = "rgb(255,255,255)";
const bright = "#196127";
const ret_length = rects.length;
console.log(rects[0])

for (let i = 0; i < ret_length; i++) {
  const item = str[Math.floor(i / 49)];
  console.log("item:", i / 49);
  const pos = i % 49;
  if (item === undefined) {
    rects[i].setAttribute("fill", blank);
    continue;
  }
  console.log("i:", i);
  if (symbols[item].indexOf(pos) !== -1) rects[i].setAttribute("fill", bright);
  else rects[i].setAttribute("fill", blank);
  // console.log("item:", item);
}

// rects.forEach((r, i) => {
//   if (symbols.A.indexOf(i + 1) !== -1) r.setAttribute("fill", bright);
//   else r.setAttribute("fill", blank);
// });
