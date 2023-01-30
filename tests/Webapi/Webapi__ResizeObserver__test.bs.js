

import * as Caml_array from "rescript/lib/es6/caml_array.js";

var el = document.createElement("strong");

function handler(entries) {
  Caml_array.get(entries, 0);
  
}

var observer = new ResizeObserver(handler);

observer.observe(el);

observer.unobserve(el);

observer.disconnect();

export {
  el ,
  handler ,
  observer ,
  
}
/* el Not a pure module */
