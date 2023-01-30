

import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Element from "../../../src/Webapi/Dom/Webapi__Dom__Element.bs.js";
import * as Webapi__Dom__DomStringMap from "../../../src/Webapi/Dom/Webapi__Dom__DomStringMap.bs.js";

var __x = Webapi__Dom__Element.asHtmlElement(document.createElement("div"));

var dataset = Belt_Option.map(__x, (function (prim) {
        return prim.dataset;
      }));

if (dataset !== undefined) {
  var dataset$1 = Caml_option.valFromOption(dataset);
  dataset$1["fooKey"] = "barValue";
  Webapi__Dom__DomStringMap.unsafeDeleteKey(dataset$1, "fooKey");
}

export {
  dataset ,
  
}
/* __x Not a pure module */
