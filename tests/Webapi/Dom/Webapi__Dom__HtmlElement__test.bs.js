

import * as TestHelpers from "../../testHelpers.bs.js";
import * as Webapi__Dom__Element from "../../../src/Webapi/Dom/Webapi__Dom__Element.bs.js";
import * as Webapi__Dom__HtmlElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlElement.bs.js";

var el = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Element.asHtmlElement(document.createElement("strong")));

var el2 = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Element.asHtmlElement(document.createElement("small")));

var $$event = document.createEvent("my-event");

el.accessKey = "";

Webapi__Dom__HtmlElement.contentEditable(el);

Webapi__Dom__HtmlElement.setContentEditable(el, /* Inherit */2);

el.contextMenu = el2;

Webapi__Dom__HtmlElement.dir(el);

Webapi__Dom__HtmlElement.setDir(el, /* Rtl */1);

el.draggable = true;

el.hidden = true;

el.itemScope = true;

el.itemId = "my-id";

el.itemValue = {};

el.lang = "en";

el.spellcheck = true;

el.tabIndex = 42;

el.title = "hovertext!";

el.translate = true;

el.blur();

el.click();

el.focus();

el.forceSpellCheck();

export {
  el ,
  el2 ,
  $$event ,
  
}
/* el Not a pure module */
