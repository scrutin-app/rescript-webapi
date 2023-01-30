

import * as Caml_option from "rescript/lib/es6/caml_option.js";

function unsafelyUnwrapOption(x) {
  if (x !== undefined) {
    return Caml_option.valFromOption(x);
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Passed `None` to unsafelyUnwrapOption",
        Error: new Error()
      };
}

export {
  unsafelyUnwrapOption ,
  
}
/* No side effect */
