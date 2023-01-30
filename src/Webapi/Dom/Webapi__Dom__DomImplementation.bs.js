

import * as Js_null from "rescript/lib/es6/js_null.js";

function createDocument(impl, namespace, qualifiedName, docType, param) {
  return impl.createDocument(Js_null.fromOption(namespace), qualifiedName, Js_null.fromOption(docType));
}

export {
  createDocument ,
  
}
/* No side effect */
