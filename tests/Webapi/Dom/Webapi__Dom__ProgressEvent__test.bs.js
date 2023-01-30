

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__ProgressEvent from "../../../src/Webapi/Dom/Webapi__Dom__ProgressEvent.bs.js";

var $$event = new ProgressEvent("my-event");

Curry._1(Webapi__Dom__ProgressEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
