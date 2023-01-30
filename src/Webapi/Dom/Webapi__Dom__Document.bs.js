

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__ParentNode from "./Webapi__Dom__ParentNode.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__NonElementParentNode from "./Webapi__Dom__NonElementParentNode.bs.js";

function Impl(T) {
  var asHtmlDocument = (function(document) {
      var defaultView = document.defaultView;

      if (defaultView != null) {
        var HTMLDocument = defaultView.HTMLDocument;

        if (HTMLDocument != null && document instanceof HTMLDocument) {
          return document;
        }
      }
    });
  var ofNode = function (node) {
    if (Webapi__Dom__Node.nodeType(node) === /* Document */8) {
      return Caml_option.some(node);
    }
    
  };
  var compatMode = function (self) {
    return Webapi__Dom__Types.decodeCompatMode(self.compatMode);
  };
  var visibilityState = function (self) {
    return Webapi__Dom__Types.decodeVisibilityState(self.visibilityState);
  };
  return {
          asHtmlDocument: asHtmlDocument,
          ofNode: ofNode,
          compatMode: compatMode,
          visibilityState: visibilityState
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__NonElementParentNode.Impl({});

Webapi__Dom__ParentNode.Impl({});

var asHtmlDocument = (function(document) {
      var defaultView = document.defaultView;

      if (defaultView != null) {
        var HTMLDocument = defaultView.HTMLDocument;

        if (HTMLDocument != null && document instanceof HTMLDocument) {
          return document;
        }
      }
    });

function ofNode(node) {
  if (Webapi__Dom__Node.nodeType(node) === /* Document */8) {
    return Caml_option.some(node);
  }
  
}

function compatMode(self) {
  return Webapi__Dom__Types.decodeCompatMode(self.compatMode);
}

function visibilityState(self) {
  return Webapi__Dom__Types.decodeVisibilityState(self.visibilityState);
}

var nodeType = include.nodeType;

export {
  Impl ,
  nodeType ,
  asHtmlDocument ,
  ofNode ,
  compatMode ,
  visibilityState ,
  
}
/* include Not a pure module */
