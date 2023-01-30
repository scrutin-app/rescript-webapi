

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Element from "./Webapi__Dom__Element.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__HtmlElement from "./Webapi__Dom__HtmlElement.bs.js";

Webapi__Dom__EventTarget.Impl({});

var include = Webapi__Dom__Node.Impl({});

var include$1 = Webapi__Dom__Element.Impl({});

var include$2 = Webapi__Dom__HtmlElement.Impl({});

function ofElement(el) {
  var match = el.tagName;
  if (match === "SELECT") {
    return Caml_option.some(el);
  }
  
}

var nodeType = include.nodeType;

var ofNode = include$1.ofNode;

var insertAdjacentElement = include$1.insertAdjacentElement;

var insertAdjacentHTML = include$1.insertAdjacentHTML;

var insertAdjacentText = include$1.insertAdjacentText;

var contentEditable = include$2.contentEditable;

var setContentEditable = include$2.setContentEditable;

var dir = include$2.dir;

var setDir = include$2.setDir;

export {
  nodeType ,
  ofNode ,
  insertAdjacentElement ,
  insertAdjacentHTML ,
  insertAdjacentText ,
  contentEditable ,
  setContentEditable ,
  dir ,
  setDir ,
  ofElement ,
  
}
/*  Not a pure module */
