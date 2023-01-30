

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__PageTransitionEvent from "../../../src/Webapi/Dom/Webapi__Dom__PageTransitionEvent.bs.js";

var $$event = new PageTransitionEvent("my-event");

Curry._1(Webapi__Dom__PageTransitionEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
