

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__AnimationEvent from "../../../src/Webapi/Dom/Webapi__Dom__AnimationEvent.bs.js";

var $$event = new AnimationEvent("my-event");

Curry._1(Webapi__Dom__AnimationEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
