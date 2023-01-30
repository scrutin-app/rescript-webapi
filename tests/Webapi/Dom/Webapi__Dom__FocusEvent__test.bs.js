

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__FocusEvent from "../../../src/Webapi/Dom/Webapi__Dom__FocusEvent.bs.js";

var $$event = new FocusEvent("my-event");

Curry._1(Webapi__Dom__FocusEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
