

import * as Webapi__Dom__Event from "../../../src/Webapi/Dom/Webapi__Dom__Event.bs.js";

var $$event = new Event("my-event");

Webapi__Dom__Event.eventPhase($$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
