

import * as Js_option from "rescript/lib/es6/js_option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

var item = Js_option.getExn(new DataTransfer().items[0]);

var kind = item.kind;

var itemType = item.type;

item.getAsString(function (_str) {
      
    });

var file = item.getFile();

var file$1 = (file == null) ? undefined : Caml_option.some(file);

var kindString = "file";

export {
  item ,
  kind ,
  itemType ,
  file$1 as file,
  kindString ,
  
}
/* item Not a pure module */
