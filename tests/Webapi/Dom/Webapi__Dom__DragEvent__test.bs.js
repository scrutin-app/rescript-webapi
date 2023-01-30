

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__DragEvent from "../../../src/Webapi/Dom/Webapi__Dom__DragEvent.bs.js";

var $$event = new DragEvent("my-event");

Curry._1(Webapi__Dom__DragEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Curry._2(Webapi__Dom__DragEvent.getModifierState, $$event, /* Alt */0);

export {
  $$event ,
  
}
/* event Not a pure module */
