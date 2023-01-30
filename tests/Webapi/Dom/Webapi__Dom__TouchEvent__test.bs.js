

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__TouchEvent from "../../../src/Webapi/Dom/Webapi__Dom__TouchEvent.bs.js";

var $$event = new TouchEvent("my-event");

Curry._1(Webapi__Dom__TouchEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
