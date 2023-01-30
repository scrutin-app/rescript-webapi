

import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";

function Impl(T) {
  var eventPhase = function (self) {
    return Webapi__Dom__Types.EventPhase.decode(self.eventPhase);
  };
  return {
          eventPhase: eventPhase
        };
}

function eventPhase(self) {
  return Webapi__Dom__Types.EventPhase.decode(self.eventPhase);
}

export {
  Impl ,
  eventPhase ,
  
}
/* No side effect */
