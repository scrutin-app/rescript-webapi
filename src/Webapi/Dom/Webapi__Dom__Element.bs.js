

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__Slotable from "./Webapi__Dom__Slotable.bs.js";
import * as Webapi__Dom__ChildNode from "./Webapi__Dom__ChildNode.bs.js";
import * as Webapi__Dom__ParentNode from "./Webapi__Dom__ParentNode.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__GlobalEventHandlers from "./Webapi__Dom__GlobalEventHandlers.bs.js";
import * as Webapi__Dom__NonDocumentTypeChildNode from "./Webapi__Dom__NonDocumentTypeChildNode.bs.js";

function ofNode(node) {
  if (Webapi__Dom__Node.nodeType(node) === /* Element */0) {
    return Caml_option.some(node);
  }
  
}

var asHtmlElement = (function(element) {
      if ((window.constructor.name !== undefined && /^HTML\w*Element$/.test(element.constructor.name))
          || (/^\[object HTML\w*Element\]$/.test(element.constructor.toString()))) {
        return element;
      }
    });

function Impl(T) {
  var insertAdjacentElement = function (self, position, element) {
    self.insertAdjacentElement(Webapi__Dom__Types.encodeInsertPosition(position), element);
    
  };
  var insertAdjacentHTML = function (self, position, text) {
    self.insertAdjacentHTML(Webapi__Dom__Types.encodeInsertPosition(position), text);
    
  };
  var insertAdjacentText = function (self, position, text) {
    self.insertAdjacentText(Webapi__Dom__Types.encodeInsertPosition(position), text);
    
  };
  return {
          asHtmlElement: asHtmlElement,
          ofNode: ofNode,
          insertAdjacentElement: insertAdjacentElement,
          insertAdjacentHTML: insertAdjacentHTML,
          insertAdjacentText: insertAdjacentText
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__GlobalEventHandlers.Impl({});

Webapi__Dom__ParentNode.Impl({});

Webapi__Dom__NonDocumentTypeChildNode.Impl({});

Webapi__Dom__ChildNode.Impl({});

Webapi__Dom__Slotable.Impl({});

function insertAdjacentElement(self, position, element) {
  self.insertAdjacentElement(Webapi__Dom__Types.encodeInsertPosition(position), element);
  
}

function insertAdjacentHTML(self, position, text) {
  self.insertAdjacentHTML(Webapi__Dom__Types.encodeInsertPosition(position), text);
  
}

function insertAdjacentText(self, position, text) {
  self.insertAdjacentText(Webapi__Dom__Types.encodeInsertPosition(position), text);
  
}

var nodeType = include.nodeType;

export {
  Impl ,
  nodeType ,
  asHtmlElement ,
  ofNode ,
  insertAdjacentElement ,
  insertAdjacentHTML ,
  insertAdjacentText ,
  
}
/* include Not a pure module */
