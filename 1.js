for (let hh of Object.getOwnPropertyNames(window)) {
  try {
    if (
      typeof window[hh] === "function" &&
      window[hh].prototype instanceof HTMLElement
    ) {
      console.log(hh);
    }
  } catch (e) {}
}
