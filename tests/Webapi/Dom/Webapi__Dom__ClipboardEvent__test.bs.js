

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__ClipboardEvent from "../../../src/Webapi/Dom/Webapi__Dom__ClipboardEvent.bs.js";

var $$event = new ClipboardEvent("my-event");

Curry._1(Webapi__Dom__ClipboardEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
