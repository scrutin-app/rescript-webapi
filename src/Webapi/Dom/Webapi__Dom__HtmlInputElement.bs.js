

import * as Webapi__Dom__Node from "./Webapi__Dom__Node.bs.js";
import * as Webapi__Dom__Element from "./Webapi__Dom__Element.bs.js";
import * as Webapi__Dom__EventTarget from "./Webapi__Dom__EventTarget.bs.js";
import * as Webapi__Dom__HtmlElement from "./Webapi__Dom__HtmlElement.bs.js";

function Impl(T) {
  var toString = function (x) {
    switch (x) {
      case /* Forward */0 :
          return "forward";
      case /* Backward */1 :
          return "backward";
      case /* None */2 :
          return "none";
      
    }
  };
  var SelectionDirection = {
    toString: toString
  };
  var setSelectionRangeWithDirection = function (selectionStart, selectionEnd, selectionDirection, element) {
    element.setSelectionRange(selectionStart, selectionEnd, toString(selectionDirection));
    
  };
  var toString$1 = function (x) {
    switch (x) {
      case /* Select */0 :
          return "select";
      case /* Start */1 :
          return "start";
      case /* End */2 :
          return "end";
      case /* Preserve */3 :
          return "preserve";
      
    }
  };
  var SelectionMode = {
    toString: toString$1
  };
  var setRangeTextWithinIntervalWithSelectionMode = function (text, selectionStart, selectionEnd, selectionMode, element) {
    element.setRangeText(text, selectionStart, selectionEnd, toString$1(selectionMode));
    
  };
  return {
          SelectionDirection: SelectionDirection,
          setSelectionRangeWithDirection: setSelectionRangeWithDirection,
          SelectionMode: SelectionMode,
          setRangeTextWithinIntervalWithSelectionMode: setRangeTextWithinIntervalWithSelectionMode
        };
}

Webapi__Dom__EventTarget.Impl({});

var include = Webapi__Dom__Node.Impl({});

var include$1 = Webapi__Dom__Element.Impl({});

var include$2 = Webapi__Dom__HtmlElement.Impl({});

function toString(x) {
  switch (x) {
    case /* Forward */0 :
        return "forward";
    case /* Backward */1 :
        return "backward";
    case /* None */2 :
        return "none";
    
  }
}

var SelectionDirection = {
  toString: toString
};

function setSelectionRangeWithDirection(selectionStart, selectionEnd, selectionDirection, element) {
  element.setSelectionRange(selectionStart, selectionEnd, toString(selectionDirection));
  
}

function toString$1(x) {
  switch (x) {
    case /* Select */0 :
        return "select";
    case /* Start */1 :
        return "start";
    case /* End */2 :
        return "end";
    case /* Preserve */3 :
        return "preserve";
    
  }
}

var SelectionMode = {
  toString: toString$1
};

function setRangeTextWithinIntervalWithSelectionMode(text, selectionStart, selectionEnd, selectionMode, element) {
  element.setRangeText(text, selectionStart, selectionEnd, toString$1(selectionMode));
  
}

var nodeType = include.nodeType;

var asHtmlElement = include$1.asHtmlElement;

var ofNode = include$1.ofNode;

var insertAdjacentElement = include$1.insertAdjacentElement;

var insertAdjacentHTML = include$1.insertAdjacentHTML;

var insertAdjacentText = include$1.insertAdjacentText;

var ofElement = include$2.ofElement;

var contentEditable = include$2.contentEditable;

var setContentEditable = include$2.setContentEditable;

var dir = include$2.dir;

var setDir = include$2.setDir;

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
  SelectionDirection ,
  setSelectionRangeWithDirection ,
  SelectionMode ,
  setRangeTextWithinIntervalWithSelectionMode ,
  
}
/*  Not a pure module */
