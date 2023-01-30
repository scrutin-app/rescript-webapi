

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__StorageEvent from "../../../src/Webapi/Dom/Webapi__Dom__StorageEvent.bs.js";

var $$event = new StorageEvent("my-event");

Curry._1(Webapi__Dom__StorageEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
