

import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__ParentNode from "./Webapi__Dom__ParentNode.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__NonElementParentNode from "./Webapi__Dom__NonElementParentNode.bs.js";

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__NonElementParentNode.Impl({});

Webapi__Dom__ParentNode.Impl({});

var nodeType = include.nodeType;

export {
  nodeType ,
  
}
/* include Not a pure module */
