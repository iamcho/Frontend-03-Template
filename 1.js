// for (let hh of Object.getOwnPropertyNames(window)) {
//   try {
//     if (
//       typeof window[hh] === "function" &&
//       window[hh].prototype instanceof HTMLElement
//     ) {
//       console.log(hh);
//     }
//   } catch (e) {}
// }

let paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];
let newArry = [];
let pathsArry = paths.forEach((v) => {
  newArry.push(...v);
});

let end = Array.from(new Set(newArry));
