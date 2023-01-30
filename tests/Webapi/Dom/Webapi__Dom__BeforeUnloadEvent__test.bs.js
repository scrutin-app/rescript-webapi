

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__BeforeUnloadEvent from "../../../src/Webapi/Dom/Webapi__Dom__BeforeUnloadEvent.bs.js";

var $$event = new BeforeUnloadEvent("my-event");

Curry._1(Webapi__Dom__BeforeUnloadEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
