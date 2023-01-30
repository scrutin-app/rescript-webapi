

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__MouseEvent from "../../../src/Webapi/Dom/Webapi__Dom__MouseEvent.bs.js";

var $$event = new MouseEvent("my-event");

Curry._1(Webapi__Dom__MouseEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__MouseEvent.getModifierState($$event, /* Alt */0);

export {
  $$event ,
  
}
/* event Not a pure module */
