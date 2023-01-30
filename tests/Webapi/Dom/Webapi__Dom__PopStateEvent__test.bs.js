

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__PopStateEvent from "../../../src/Webapi/Dom/Webapi__Dom__PopStateEvent.bs.js";

var $$event = new PopStateEvent("my-event");

Curry._1(Webapi__Dom__PopStateEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
