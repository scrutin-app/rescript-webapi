

import * as Curry from "rescript/lib/es6/curry.js";
import * as Webapi__Dom__CustomEvent from "../../../src/Webapi/Dom/Webapi__Dom__CustomEvent.bs.js";

var $$event = new CustomEvent("my-event");

Curry._1(Webapi__Dom__CustomEvent.eventPhase, $$event);

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

var Detail = {};

var EventWithDetail = Webapi__Dom__CustomEvent.Make(Detail);

var eventWithDetail = new CustomEvent("event-with-detail");

var eventWithOptions = new CustomEvent("event-with-detail", {
      component: "test-component"
    });

Curry._1(EventWithDetail.eventPhase, eventWithDetail);

Curry._1(EventWithDetail.eventPhase, eventWithOptions);

eventWithDetail.preventDefault();

eventWithDetail.stopImmediatePropagation();

eventWithDetail.stopPropagation();

eventWithOptions.preventDefault();

eventWithOptions.stopImmediatePropagation();

eventWithOptions.stopPropagation();

export {
  $$event ,
  Detail ,
  EventWithDetail ,
  eventWithDetail ,
  eventWithOptions ,
  
}
/* event Not a pure module */
