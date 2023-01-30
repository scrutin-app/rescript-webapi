

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__CloseEvent from "../../../src/Webapi/Dom/Webapi__Dom__CloseEvent.bs.js";

var $$event = new CloseEvent("my-event");

Curry._1(Webapi__Dom__CloseEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
