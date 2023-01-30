

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__TransitionEvent from "../../../src/Webapi/Dom/Webapi__Dom__TransitionEvent.bs.js";

var $$event = new TransitionEvent("my-event");

Curry._1(Webapi__Dom__TransitionEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
