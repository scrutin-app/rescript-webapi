

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Slotable from "./Webapi__Dom__Slotable.bs.js";
import * as Webapi__Dom__ChildNode from "./Webapi__Dom__ChildNode.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__CharacterData from "./Webapi__Dom__CharacterData.bs.js";
import * as Webapi__Dom__NonDocumentTypeChildNode from "./Webapi__Dom__NonDocumentTypeChildNode.bs.js";

function ofNode(node) {
  if (Webapi__Dom__Node.nodeType(node) === /* Text */2) {
    return Caml_option.some(node);
  }
  
}

function Impl(T) {
  return {
          ofNode: ofNode
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__CharacterData.Impl({});

Webapi__Dom__NonDocumentTypeChildNode.Impl({});

Webapi__Dom__ChildNode.Impl({});

Webapi__Dom__Slotable.Impl({});

var nodeType = include.nodeType;

export {
  Impl ,
  nodeType ,
  ofNode ,
  
}
/* include Not a pure module */
