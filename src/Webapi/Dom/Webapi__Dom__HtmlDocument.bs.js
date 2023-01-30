

import * as Js_null from "rescript/lib/es6/js_null.js";
import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__Document from "./Webapi__Dom__Document.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__GlobalEventHandlers from "./Webapi__Dom__GlobalEventHandlers.bs.js";

function Impl(T) {
  var designMode = function (self) {
    return Webapi__Dom__Types.decodeDesignMode(self.designMode);
  };
  var setDesignMode = function (self, value) {
    self.designMode = Webapi__Dom__Types.encodeDesignMode(value);
    
  };
  var dir = function (self) {
    return Webapi__Dom__Types.decodeDir(self.dir);
  };
  var setDir = function (self, value) {
    self.dir = Webapi__Dom__Types.encodeDir(value);
    
  };
  var readyState = function (self) {
    return Webapi__Dom__Types.decodeReadyState(self.readyState);
  };
  var execCommand = function (self, command, show, value) {
    return self.execCommand(command, show, Js_null.fromOption(value));
  };
  return {
          designMode: designMode,
          setDesignMode: setDesignMode,
          dir: dir,
          setDir: setDir,
          readyState: readyState,
          execCommand: execCommand
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__GlobalEventHandlers.Impl({});

var include$1 = Webapi__Dom__Document.Impl({});

function designMode(self) {
  return Webapi__Dom__Types.decodeDesignMode(self.designMode);
}

function setDesignMode(self, value) {
  self.designMode = Webapi__Dom__Types.encodeDesignMode(value);
  
}

function dir(self) {
  return Webapi__Dom__Types.decodeDir(self.dir);
}

function setDir(self, value) {
  self.dir = Webapi__Dom__Types.encodeDir(value);
  
}

function readyState(self) {
  return Webapi__Dom__Types.decodeReadyState(self.readyState);
}

function execCommand(self, command, show, value) {
  return self.execCommand(command, show, Js_null.fromOption(value));
}

var nodeType = include.nodeType;

var asHtmlDocument = include$1.asHtmlDocument;

var ofNode = include$1.ofNode;

var compatMode = include$1.compatMode;

var visibilityState = include$1.visibilityState;

export {
  Impl ,
  nodeType ,
  asHtmlDocument ,
  ofNode ,
  compatMode ,
  visibilityState ,
  designMode ,
  setDesignMode ,
  dir ,
  setDir ,
  readyState ,
  execCommand ,
  
}
/* include Not a pure module */
