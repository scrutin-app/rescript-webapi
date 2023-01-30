

import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__Element from "./Webapi__Dom__Element.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__GlobalEventHandlers from "./Webapi__Dom__GlobalEventHandlers.bs.js";

function Impl(T) {
  var contentEditable = function (self) {
    return Webapi__Dom__Types.decodeContentEditable(self.contentEditable);
  };
  var setContentEditable = function (self, value) {
    self.contentEditable = Webapi__Dom__Types.encodeContentEditable(value);
    
  };
  var dir = function (self) {
    return Webapi__Dom__Types.decodeDir(self.dir);
  };
  var setDir = function (self, value) {
    self.dir = Webapi__Dom__Types.encodeDir(value);
    
  };
  return {
          ofElement: Webapi__Dom__Element.asHtmlElement,
          contentEditable: contentEditable,
          setContentEditable: setContentEditable,
          dir: dir,
          setDir: setDir
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__GlobalEventHandlers.Impl({});

var include$1 = Webapi__Dom__Element.Impl({});

function contentEditable(self) {
  return Webapi__Dom__Types.decodeContentEditable(self.contentEditable);
}

function setContentEditable(self, value) {
  self.contentEditable = Webapi__Dom__Types.encodeContentEditable(value);
  
}

function dir(self) {
  return Webapi__Dom__Types.decodeDir(self.dir);
}

function setDir(self, value) {
  self.dir = Webapi__Dom__Types.encodeDir(value);
  
}

var nodeType = include.nodeType;

var asHtmlElement = include$1.asHtmlElement;

var ofNode = include$1.ofNode;

var insertAdjacentElement = include$1.insertAdjacentElement;

var insertAdjacentHTML = include$1.insertAdjacentHTML;

var insertAdjacentText = include$1.insertAdjacentText;

var ofElement = Webapi__Dom__Element.asHtmlElement;

export {
  Impl ,
  nodeType ,
  asHtmlElement ,
  ofNode ,
  insertAdjacentElement ,
  insertAdjacentHTML ,
  insertAdjacentText ,
  ofElement ,
  contentEditable ,
  setContentEditable ,
  dir ,
  setDir ,
  
}
/* include Not a pure module */
