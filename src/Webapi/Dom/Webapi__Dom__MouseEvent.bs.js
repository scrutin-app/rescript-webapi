

import * as Webapi__Dom__Event from "./Webapi__Dom__Event.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__UiEvent from "./Webapi__Dom__UiEvent.bs.js";

function Impl(T) {
  var getModifierState = function (self, key) {
    return self.getModifierState(Webapi__Dom__Types.encodeModifierKey(key));
  };
  return {
          getModifierState: getModifierState
        };
}

var include = Webapi__Dom__Event.Impl({});

Webapi__Dom__UiEvent.Impl({});

function getModifierState(self, key) {
  return self.getModifierState(Webapi__Dom__Types.encodeModifierKey(key));
}

var eventPhase = include.eventPhase;

export {
  Impl ,
  eventPhase ,
  getModifierState ,
  
}
/* include Not a pure module */
