

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__TimeEvent from "../../../src/Webapi/Dom/Webapi__Dom__TimeEvent.bs.js";

var $$event = new TimeEvent("my-event");

Curry._1(Webapi__Dom__TimeEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
