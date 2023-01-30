

import * as Curry from "rescript/lib/es6/curry.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Webapi__Dom__Document from "../src/Webapi/Dom/Webapi__Dom__Document.bs.js";
import * as Webapi__Dom__HtmlImageElement from "../src/Webapi/Dom/Webapi__Dom__HtmlImageElement.bs.js";

var url = "";

function processImage(url) {
  return new Promise((function (resolve, reject) {
                var e = document.createElement("img");
                var maybeImg = Curry._1(Webapi__Dom__HtmlImageElement.ofElement, e);
                maybeImg.src = url;
                maybeImg.addEventListener("load", (function ($$event) {
                        return resolve($$event);
                      }));
                maybeImg.addEventListener("error", (function (error) {
                        return reject(error);
                      }));
                var body = Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), (function (prim) {
                        return Caml_option.nullable_to_opt(prim.body);
                      }));
                body.appendChild(maybeImg);
                body.removeChild(maybeImg);
                
              }));
}

var test = processImage(url).then(function ($$event) {
      var img = Curry._1(Webapi__Dom__HtmlImageElement.ofElement, $$event.currentTarget);
      var width = img.naturalWidth;
      var height = img.naturalHeight;
      console.log("width", width, "height", height);
      
    });

export {
  url ,
  processImage ,
  test ,
  
}
/* test Not a pure module */
