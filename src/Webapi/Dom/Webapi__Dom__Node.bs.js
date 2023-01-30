

import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";

function Impl(T) {
  var nodeType = function (self) {
    return Webapi__Dom__Types.decodeNodeType(self.nodeType);
  };
  return {
          nodeType: nodeType
        };
}

Webapi__Dom__EventTarget.Impl({});

function nodeType(self) {
  return Webapi__Dom__Types.decodeNodeType(self.nodeType);
}

export {
  Impl ,
  nodeType ,
  
}
/*  Not a pure module */
