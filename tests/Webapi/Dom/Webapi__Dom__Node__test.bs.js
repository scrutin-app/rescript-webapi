

import * as Webapi__Dom__Node from "../../../src/Webapi/Dom/Webapi__Dom__Node.bs.js";

var node = document.createElement("strong").rootNode;

var node2 = document.createElement("small").rootNode;

var node3 = document.createElement("small").rootNode;

Webapi__Dom__Node.nodeType(node);

node.nodeValue = "foo";

node.textContent = "foo";

node.appendChild(node2);

node.cloneNode();

node.cloneNode(true);

node.compareDocumentPosition(node2);

node.contains(node2);

node.getRootNode();

node.getRootNode({ "composed": true });

node.hasChildNodes();

node.insertBefore(node2, node3);

node.insertBefore(node2, null);

node.isDefaultNamespace("http://...");

node.isEqualNode(node2);

node.lookupPrefix();

node.lookupNamespaceURI("https://...");

node.lookupNamespaceURI(null);

node.normalize();

node.removeChild(node2);

node.replaceChild(node3, node2);

export {
  node ,
  node2 ,
  node3 ,
  
}
/* node Not a pure module */
