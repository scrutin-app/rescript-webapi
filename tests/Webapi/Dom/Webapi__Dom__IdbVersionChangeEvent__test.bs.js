

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__IdbVersionChangeEvent from "../../../src/Webapi/Dom/Webapi__Dom__IdbVersionChangeEvent.bs.js";

var $$event = new IDBVersionChangeEvent("my-event");

Curry._1(Webapi__Dom__IdbVersionChangeEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */