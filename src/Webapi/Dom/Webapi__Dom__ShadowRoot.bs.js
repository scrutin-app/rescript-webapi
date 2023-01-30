

import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__ParentNode from "./Webapi__Dom__ParentNode.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__NonElementParentNode from "./Webapi__Dom__NonElementParentNode.bs.js";

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__NonElementParentNode.Impl({});

Webapi__Dom__ParentNode.Impl({});

function shadowRootMode(self) {
  return Webapi__Dom__Types.decodeShadowRootMode(self.shadowRootMode);
}

var nodeType = include.nodeType;

export {
  nodeType ,
  shadowRootMode ,
  
}
/* include Not a pure module */
