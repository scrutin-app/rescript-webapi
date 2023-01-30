

import * as TestHelpers from "../../testHelpers.bs.js";
import * as Webapi__Dom__Document from "../../../src/Webapi/Dom/Webapi__Dom__Document.bs.js";

var node = document.createElement("strong");

var sel = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__Document.asHtmlDocument(document)).getSelection();

var range = new Range();

sel.getRangeAt(0);

sel.collapse(node, 0);

sel.extend(node, 0);

sel.collapseToStart();

sel.collapseToEnd();

sel.selectAllChildren(node);

sel.addRange(range);

sel.removeRange(range);

sel.removeAllRanges();

sel.deleteFromDocument();

sel.setBaseAndExtent(node, 0, node, 0);

sel.toString();

sel.containsNode(node, false);

sel.containsNode(node, true);

export {
  node ,
  sel ,
  range ,
  
}
/* node Not a pure module */
