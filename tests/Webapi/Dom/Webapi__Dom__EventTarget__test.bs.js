

import * as Webapi__Dom__CustomEvent from "../../../src/Webapi/Dom/Webapi__Dom__CustomEvent.bs.js";

var target = document.createElement("strong");

var $$event = new Event("my-event");

function handleClick(param) {
  console.log("asd");
  
}

target.addEventListener("click", handleClick);

target.addEventListener("click", handleClick, {
      passive: true,
      once: true,
      capture: false
    });

target.addEventListener("click", handleClick, true);

target.removeEventListener("click", handleClick);

target.removeEventListener("click", handleClick, {
      passive: true,
      capture: false
    });

target.removeEventListener("click", handleClick, true);

target.dispatchEvent($$event);

var customEvent = new CustomEvent("custom-event", {
      detail: {
        test: "test"
      }
    });

target.dispatchEvent(customEvent);

var Detail = {};

var EventWithDetail = Webapi__Dom__CustomEvent.Make(Detail);

var typedCustomEvent = new CustomEvent("event-with-detail", {
      test: "test"
    });

target.dispatchEvent(typedCustomEvent);

export {
  target ,
  $$event ,
  handleClick ,
  customEvent ,
  Detail ,
  EventWithDetail ,
  typedCustomEvent ,
  
}
/* target Not a pure module */
