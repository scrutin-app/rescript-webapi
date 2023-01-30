

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__RelatedEvent from "../../../src/Webapi/Dom/Webapi__Dom__RelatedEvent.bs.js";

var $$event = new RelatedEvent("my-event");

Curry._1(Webapi__Dom__RelatedEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
