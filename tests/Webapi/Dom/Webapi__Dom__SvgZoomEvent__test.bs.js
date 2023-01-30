

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__SvgZoomEvent from "../../../src/Webapi/Dom/Webapi__Dom__SvgZoomEvent.bs.js";

var $$event = new SVGZoomEvent("my-event");

Curry._1(Webapi__Dom__SvgZoomEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

export {
  $$event ,
  
}
/* event Not a pure module */
