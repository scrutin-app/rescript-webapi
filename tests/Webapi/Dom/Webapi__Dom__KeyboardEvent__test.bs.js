

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__KeyboardEvent from "../../../src/Webapi/Dom/Webapi__Dom__KeyboardEvent.bs.js";

var $$event = new KeyboardEvent("my-event");

Curry._1(Webapi__Dom__KeyboardEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

Webapi__Dom__KeyboardEvent.getModifierState($$event, /* Alt */0);

export {
  $$event ,
  
}
/* event Not a pure module */
