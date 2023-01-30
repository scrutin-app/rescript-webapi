

import * as Webapi__Dom__Event from "./Webapi__Dom__Event.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__UiEvent from "./Webapi__Dom__UiEvent.bs.js";
import * as Webapi__Dom__MouseEvent from "./Webapi__Dom__MouseEvent.bs.js";

var include = Webapi__Dom__Event.Impl({});

Webapi__Dom__UiEvent.Impl({});

var include$1 = Webapi__Dom__MouseEvent.Impl({});

function pointerType(self) {
  return Webapi__Dom__Types.decodePointerType(self.pointerType);
}

var eventPhase = include.eventPhase;

var getModifierState = include$1.getModifierState;

export {
  eventPhase ,
  getModifierState ,
  pointerType ,
  
}
/* include Not a pure module */
