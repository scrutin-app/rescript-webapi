


function encodeCompareHow(x) {
  return x;
}

function decodeCompareResult(x) {
  if ((x + 1 >>> 0) > 2) {
    return /* Unknown */3;
  } else {
    return x + 1 | 0;
  }
}

function decodeCompatMode(x) {
  switch (x) {
    case "BackCompat" :
        return /* BackCompat */0;
    case "CSS1Compat" :
        return /* CSS1Compat */1;
    default:
      return /* Unknown */2;
  }
}

function encodeContentEditable(x) {
  switch (x) {
    case /* True */0 :
        return "true";
    case /* False */1 :
        return "false";
    case /* Inherit */2 :
        return "inherit";
    case /* Unknown */3 :
        return "";
    
  }
}

function decodeContentEditable(x) {
  switch (x) {
    case "false" :
        return /* False */1;
    case "inherit" :
        return /* Inherit */2;
    case "true" :
        return /* True */0;
    default:
      return /* Unknown */3;
  }
}

function decodeDeltaMode(x) {
  if (x > 2 || x < 0) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "invalid deltaMode",
          Error: new Error()
        };
  }
  return x;
}

function encodeDesignMode(x) {
  switch (x) {
    case /* On */0 :
        return "on";
    case /* Off */1 :
        return "off";
    case /* Unknown */2 :
        return "";
    
  }
}

function decodeDesignMode(x) {
  switch (x) {
    case "off" :
        return /* Off */1;
    case "on" :
        return /* On */0;
    default:
      return /* Unknown */2;
  }
}

function encodeDir(x) {
  switch (x) {
    case /* Ltr */0 :
        return "ltr";
    case /* Rtl */1 :
        return "rtl";
    case /* Unknown */2 :
        return "";
    
  }
}

function decodeDir(x) {
  switch (x) {
    case "ltr" :
        return /* Ltr */0;
    case "rtl" :
        return /* Rtl */1;
    default:
      return /* Unknown */2;
  }
}

function decode(x) {
  if (x > 3 || x < 0) {
    return /* Unknown */4;
  } else {
    return x;
  }
}

var EventPhase = {
  decode: decode
};

function encodeFilterAction(x) {
  return x + 1 | 0;
}

function encodeInsertPosition(x) {
  switch (x) {
    case /* BeforeBegin */0 :
        return "beforebegin";
    case /* AfterBegin */1 :
        return "afterbegin";
    case /* BeforeEnd */2 :
        return "beforeend";
    case /* AfterEnd */3 :
        return "afterend";
    
  }
}

function encodeModifierKey(x) {
  switch (x) {
    case /* Alt */0 :
        return "Alt";
    case /* AltGraph */1 :
        return "AltGraph";
    case /* CapsLock */2 :
        return "CapsLock";
    case /* Control */3 :
        return "Control";
    case /* Fn */4 :
        return "Fn";
    case /* FnLock */5 :
        return "FnLock";
    case /* Hyper */6 :
        return "Hyper";
    case /* Meta */7 :
        return "Meta";
    case /* NumLock */8 :
        return "NumLock";
    case /* ScrollLock */9 :
        return "ScrollLock";
    case /* Shift */10 :
        return "Shift";
    case /* Super */11 :
        return "Super";
    case /* Symbol */12 :
        return "Symbol";
    case /* SymbolLock */13 :
        return "SymbolLock";
    
  }
}

function decodeNodeType(x) {
  if (x > 12 || x < 1) {
    return /* Unknown */12;
  } else {
    return x - 1 | 0;
  }
}

function decodePointerType(x) {
  switch (x) {
    case "mouse" :
        return /* Mouse */0;
    case "pen" :
        return /* Pen */1;
    case "touch|" :
        return /* Touch */2;
    default:
      return /* Unknown */3;
  }
}

function decodeReadyState(x) {
  switch (x) {
    case "complete" :
        return /* Complete */2;
    case "interactive" :
        return /* Interactive */1;
    case "loading" :
        return /* Loading */0;
    default:
      return /* Unknown */3;
  }
}

function decodeShadowRootMode(x) {
  switch (x) {
    case "closed" :
        return /* Closed */1;
    case "open" :
        return /* Open */0;
    default:
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Unknown shadowRootMode",
            Error: new Error()
          };
  }
}

function decodeVisibilityState(x) {
  switch (x) {
    case "hidden" :
        return /* Hidden */1;
    case "prerender" :
        return /* Prerender */2;
    case "unloaded" :
        return /* Unloaded */3;
    case "visible" :
        return /* Visible */0;
    default:
      return /* Unknown */4;
  }
}

function many(x) {
  if (x) {
    return x.hd | many(x.tl);
  } else {
    return 0;
  }
}

var WhatToShow = {
  _All: -1,
  _Element: 1,
  _Attribute: 2,
  _Text: 4,
  _CDATASection: 8,
  _EntityReference: 16,
  _Entity: 32,
  _ProcessingInstruction: 64,
  _Comment: 128,
  _Document: 256,
  _DocumentType: 512,
  _DocumentFragment: 1024,
  _Notation: 2048,
  many: many
};

export {
  encodeCompareHow ,
  decodeCompareResult ,
  decodeCompatMode ,
  encodeContentEditable ,
  decodeContentEditable ,
  decodeDeltaMode ,
  encodeDesignMode ,
  decodeDesignMode ,
  encodeDir ,
  decodeDir ,
  EventPhase ,
  encodeFilterAction ,
  encodeInsertPosition ,
  encodeModifierKey ,
  decodeNodeType ,
  decodePointerType ,
  decodeReadyState ,
  decodeShadowRootMode ,
  decodeVisibilityState ,
  WhatToShow ,
  
}
/* No side effect */
