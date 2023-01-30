

import * as Webapi__Dom__Types from "../../../src/Webapi/Dom/Webapi__Dom__Types.bs.js";
import * as Webapi__Dom__Document from "../../../src/Webapi/Dom/Webapi__Dom__Document.bs.js";
import * as Webapi__Dom__NodeFilter from "../../../src/Webapi/Dom/Webapi__Dom__NodeFilter.bs.js";

var el = document.createElement("strong");

var e = document.activeElement;

if (!(e == null)) {
  console.log(e);
}

Webapi__Dom__Document.compatMode(document);

document.selectedStyleSheetSet = "muh-stylesheet";

Webapi__Dom__Document.visibilityState(document);

document.adoptNode(el);

document.createAttribute("data-foo");

document.createAttributeNS("http://...", "foo");

document.createComment("witty comment");

document.createDocumentFragment();

document.createElement("div");

document.createElement("div", {});

document.createElementNS("http://...", "foo");

document.createElementNS("http://...", "div", {});

document.createEvent("MyCustomEvent");

document.createNodeIterator(el);

document.createNodeIterator(el, Webapi__Dom__Types.WhatToShow._All);

document.createNodeIterator(el, Webapi__Dom__Types.WhatToShow.many({
          hd: Webapi__Dom__Types.WhatToShow._Element,
          tl: {
            hd: Webapi__Dom__Types.WhatToShow._Attribute,
            tl: /* [] */0
          }
        }), Webapi__Dom__NodeFilter.make(function (param) {
          return 0;
        }));

document.createRange();

document.createTextNode("Very reasonable!");

document.createTreeWalker(el);

document.createTreeWalker(el, Webapi__Dom__Types.WhatToShow._All);

document.createTreeWalker(el, Webapi__Dom__Types.WhatToShow.many({
          hd: Webapi__Dom__Types.WhatToShow._Element,
          tl: {
            hd: Webapi__Dom__Types.WhatToShow._Attribute,
            tl: /* [] */0
          }
        }), Webapi__Dom__NodeFilter.make(function (param) {
          return 0;
        }));

var el$1 = document.elementFromPoint(0, 0);

if (!(el$1 == null)) {
  console.log(el$1);
}

document.elementsFromPoint(0, 0);

document.enableStyleSheetsForSet("my-stylesheet-set");

document.exitPointerLock();

document.getAnimations();

document.getElementsByClassName("lstlisting");

document.getElementsByTagName("code");

document.getElementsByTagNameNS("http://...", "foo");

document.hasFocus();

document.importNode(el);

document.importNode(el, true);

document.getElementById("root");

document.querySelector(".lstlisting");

document.querySelectorAll(".lstlisting");

export {
  el ,
  
}
/* el Not a pure module */
