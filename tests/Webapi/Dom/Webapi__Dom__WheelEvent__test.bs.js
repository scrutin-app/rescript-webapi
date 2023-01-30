

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__WheelEvent from "../../../src/Webapi/Dom/Webapi__Dom__WheelEvent.bs.js";

var $$event = new WheelEvent("my-event");

Curry._1(Webapi__Dom__WheelEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__WheelEvent.deltaMode($$event);

export {
  $$event ,
  
}
/* event Not a pure module */
