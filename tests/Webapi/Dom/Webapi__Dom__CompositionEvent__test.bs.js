

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__CompositionEvent from "../../../src/Webapi/Dom/Webapi__Dom__CompositionEvent.bs.js";

var $$event = new CompositionEvent("my-event");

Curry._1(Webapi__Dom__CompositionEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
