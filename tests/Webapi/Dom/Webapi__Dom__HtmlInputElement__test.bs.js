

import * as Curry from "rescript/lib/es6/curry.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__HtmlInputElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlInputElement.bs.js";

var input = Curry._1(Webapi__Dom__HtmlInputElement.ofElement, document.body);

if (input !== undefined) {
  var input$1 = Caml_option.valFromOption(input);
  input$1.focus();
  input$1.select();
}

export {
  
}
/* input Not a pure module */
