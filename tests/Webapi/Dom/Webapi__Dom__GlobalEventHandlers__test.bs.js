

import * as TestHelpers from "../../testHelpers.bs.js";
import * as Webapi__Dom__Document from "../../../src/Webapi/Dom/Webapi__Dom__Document.bs.js";
import * as Webapi__Dom__HtmlElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlElement.bs.js";

function handleSelection(param) {
  console.log("change");
  
}

var elm = document.createElement("strong");

elm.addEventListener("selectionchange", handleSelection, {
      passive: true,
      once: true,
      capture: false
    });

elm.addEventListener("selectionchange", handleSelection, true);

elm.removeEventListener("selectionchange", handleSelection);

elm.removeEventListener("selectionchange", handleSelection, {
      passive: true,
      capture: false
    });

elm.removeEventListener("selectionchange", handleSelection, true);

var htmlElm = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__HtmlElement.ofElement(document.createElement("strong")));

htmlElm.addEventListener("selectionchange", handleSelection, {
      passive: true,
      once: true,
      capture: false
    });

htmlElm.addEventListener("selectionchange", handleSelection, true);

htmlElm.removeEventListener("selectionchange", handleSelection);

htmlElm.removeEventListener("selectionchange", handleSelection, {
      passive: true,
      capture: false
    });

htmlElm.removeEventListener("selectionchange", handleSelection, true);

var htmlDoc = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Document.asHtmlDocument(document));

htmlDoc.addEventListener("selectionchange", handleSelection, {
      passive: true,
      once: true,
      capture: false
    });

htmlDoc.addEventListener("selectionchange", handleSelection, true);

htmlDoc.removeEventListener("selectionchange", handleSelection);

htmlDoc.removeEventListener("selectionchange", handleSelection, {
      passive: true,
      capture: false
    });

htmlDoc.removeEventListener("selectionchange", handleSelection, true);

window.addEventListener("selectionchange", handleSelection, {
      passive: true,
      once: true,
      capture: false
    });

window.addEventListener("selectionchange", handleSelection, true);

window.removeEventListener("selectionchange", handleSelection);

window.removeEventListener("selectionchange", handleSelection, {
      passive: true,
      capture: false
    });

window.removeEventListener("selectionchange", handleSelection, true);

export {
  handleSelection ,
  elm ,
  htmlElm ,
  htmlDoc ,
  
}
/* elm Not a pure module */
