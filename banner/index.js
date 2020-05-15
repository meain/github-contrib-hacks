const graph = document.getElementsByClassName("js-calendar-graph-svg")[0];
let rects = [];
const gs = document
  .getElementsByClassName("js-calendar-graph-svg")[0]
  .getElementsByTagName("g")[0]
  .getElementsByTagName("g");

Array.from(gs).forEach(g => {
  rects = [...rects, ...Array.from(g.getElementsByTagName("rect"))];
});

const symbols = {'R': [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 14, 16, 18, 21, 23, 25, 28, 30, 33, 35, 37, 41, 42, 43, 44, 48], 'U': [0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 42, 43, 44, 45, 46, 47, 48], 'I': [0, 6, 7, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27, 28, 34, 35, 41, 42, 48], 'N': [0, 1, 2, 3, 4, 5, 6, 8, 16, 24, 32, 40, 42, 43, 44, 45, 46, 47, 48], 'G': [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 24, 27, 28, 31, 34, 35, 38, 41, 42, 45, 46, 47], 'Z': [0, 6, 7, 12, 13, 14, 18, 20, 21, 24, 27, 28, 30, 34, 35, 36, 41, 42, 48], 'T': [0, 7, 14, 21, 22, 23, 24, 25, 26, 27, 28, 35, 42], 'S': [0, 1, 2, 3, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 31, 34, 35, 38, 41, 42, 45, 46, 47, 48], 'A': [5, 6, 10, 11, 15, 16, 17, 21, 24, 29, 30, 31, 38, 39, 47, 48], 'F': [0, 1, 2, 3, 4, 5, 6, 7, 10, 14, 17, 21, 24, 28, 31, 35, 38, 42, 45], 'O': [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48], 'H': [0, 1, 2, 3, 4, 5, 6, 10, 17, 24, 31, 38, 42, 43, 44, 45, 46, 47, 48], 'space': [], 'M': [0, 1, 2, 3, 4, 5, 6, 7, 15, 23, 29, 35, 42, 43, 44, 45, 46, 47, 48], 'J': [0, 6, 7, 13, 14, 20, 21, 22, 23, 24, 25, 26, 28, 35, 42], 'C': [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 48], 'D': [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 36, 40, 44, 45, 46], 'V': [0, 1, 9, 10, 18, 19, 27, 32, 33, 37, 38, 42, 43], 'Q': [0, 1, 2, 3, 4, 5, 7, 12, 14, 19, 21, 26, 28, 32, 33, 35, 36, 37, 38, 39, 40, 48], 'X': [0, 6, 8, 12, 16, 18, 24, 30, 32, 36, 40, 42, 48], 'E': [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 31, 34, 35, 38, 41, 42, 45, 48], 'B': [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 31, 34, 35, 37, 39, 41, 43, 47], 'K': [0, 1, 2, 3, 4, 5, 6, 10, 17, 23, 24, 25, 30, 32, 36, 40, 42, 48], 'L': [0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48], 'Y': [0, 8, 16, 24, 25, 26, 27, 30, 36, 42], 'P': [0, 1, 2, 3, 4, 5, 6, 7, 9, 14, 16, 21, 23, 28, 30, 35, 37, 42, 43, 44], 'W': [0, 1, 2, 3, 4, 5, 6, 11, 19, 27, 33, 39, 42, 43, 44, 45, 46, 47, 48]}

const string_full = document.getElementsByClassName('vcard-fullname')[0].textContent + "  "
const str = string_full.toUpperCase().split('').map(l => l==' ' ? 'space':l)

const blank = "rgb(255,255,255)";
const bright = "#196127";
const ret_length = rects.length;
function draw(start_location, letter) {
  let lb = letter;
  setTimeout(() => {
    if (start_location < 7) {
      start_location = 56;
      lb += 1;
    }
    draw(start_location - 7, lb);
  }, 100);
  let inner_counter = 0;
  for (let i = 0; i <= start_location; i++) {
    rects[i].setAttribute("fill", blank);
  }
  for (let i = start_location; i < ret_length; i++) {
    item = str[letter % str.length];
    if (item === undefined) {
      rects[i].setAttribute("fill", blank);
      continue;
    }
    if (symbols[item].indexOf(inner_counter) !== -1)
      rects[i].setAttribute("fill", bright);
    else rects[i].setAttribute("fill", blank);
    inner_counter++;
    if (inner_counter === 49) {
      for (let j = 1; j <= 14; j++) {
        if (rects[i + j]) rects[i + j].setAttribute("fill", blank);
      }
      i += 14;
      inner_counter = 0;
      letter += 1;
    }
  }
}
draw(0, 0);
