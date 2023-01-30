

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__PointerEvent from "../../../src/Webapi/Dom/Webapi__Dom__PointerEvent.bs.js";

var $$event = new PointerEvent("my-event");

Curry._1(Webapi__Dom__PointerEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Curry._2(Webapi__Dom__PointerEvent.getModifierState, $$event, /* Alt */0);

Webapi__Dom__PointerEvent.pointerType($$event);

export {
  $$event ,
  
}
/* event Not a pure module */
