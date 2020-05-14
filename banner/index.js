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
  A: [5, 6, 10, 11, 15, 16, 17, 21, 24, 29, 30, 31, 38, 39, 47, 48],
  B: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    10,
    13,
    14,
    17,
    20,
    21,
    24,
    27,
    28,
    31,
    34,
    35,
    37,
    39,
    41,
    43,
    47
  ]
};

const str = ["A", "B"];

const blank = "rgb(255,255,255)";
const bright = "#196127";
const ret_length = rects.length;
console.log(rects[0]);

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
}
