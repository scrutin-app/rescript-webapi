

import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as TestHelpers from "../testHelpers.bs.js";
import * as Webapi__Dom__Document from "../../src/Webapi/Dom/Webapi__Dom__Document.bs.js";

var el = document.createElement("div");

var body = TestHelpers.unsafelyUnwrapOption(Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), (function (prim) {
            return Caml_option.nullable_to_opt(prim.body);
          })));

el.innerText = "Hello There";

el.setAttribute("style", "margin-top: 800px; margin-bottom: 800px");

body.appendChild(el);

function handler(entries, observer) {
  entries.forEach(function (entry) {
        console.log(entry.time);
        console.log(entry.rootBounds);
        console.log(entry.boundingClientRect);
        console.log(entry.intersectionRect);
        console.log(entry.isIntersecting);
        console.log(entry.intersectionRatio);
        console.log(entry.target);
        
      });
  observer.unobserve(el);
  
}

var observer = new IntersectionObserver(handler);

observer.observe(el);

observer.unobserve(el);

observer.observe(el);

observer.disconnect();

export {
  el ,
  body ,
  handler ,
  observer ,
  
}
/* el Not a pure module */
