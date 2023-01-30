

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__TrackEvent from "../../../src/Webapi/Dom/Webapi__Dom__TrackEvent.bs.js";

var $$event = new TrackEvent("my-event");

Curry._1(Webapi__Dom__TrackEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
