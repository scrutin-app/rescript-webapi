

import * as Webapi__Dom__Element from "../../../src/Webapi/Dom/Webapi__Dom__Element.bs.js";

var el = document.createElement("strong");

var el2 = document.createElement("small");

var $$event = new PointerEvent("my-event");

el.className = "my-class-name";

el.id = "my-id";

el.innerHTML = "<strong>stuff</strong>";

el.outerHTML = "<strong>stuff</strong>";

el.scrollLeft = 0.0;

el.scrollTop = 0.0;

el.slot = "<strong>stuff</strong>";

el.attachShadow({
      mode: "open"
    });

el.attachShadow({ "mode": "open" });

el.attachShadow({ "mode": "closed" });

el.animate({
      transform: "translateT(0px)"
    }, {
      duration: 1000
    });

el.closest("input");

el.getAttribute("href");

el.getAttributeNS("http://...", "foo");

el.getBoundingClientRect();

el.getClientRects().item(0);

Array.prototype.slice.call(el.getClientRects());

el.getElementsByClassName("some-class-name");

el.getElementsByTagName("pre");

el.getElementsByTagNameNS("http://...", "td");

el.hasAttribute("data-my-value");

el.hasAttributeNS("http://...", "foo");

el.hasAttributes();

Webapi__Dom__Element.insertAdjacentElement(el, /* BeforeBegin */0, el2);

Webapi__Dom__Element.insertAdjacentHTML(el, /* AfterBegin */1, "<strong>text</strong>");

Webapi__Dom__Element.insertAdjacentText(el, /* AfterEnd */3, "text");

el.matches("input");

el.querySelector("input");

el.querySelectorAll("input");

el.releasePointerCapture($$event.pointerId);

el.remove();

el.removeAttribute("href");

el.removeAttributeNS("http://...", "foo");

el.requestFullscreen();

el.requestPointerLock();

el.scrollIntoView();

el.scrollIntoView(true);

el.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });

el.setAttribute("href", "http://...");

el.setAttributeNS("http://...", "foo", "bar");

el.setPointerCapture($$event.pointerId);

export {
  el ,
  el2 ,
  $$event ,
  
}
/* el Not a pure module */
