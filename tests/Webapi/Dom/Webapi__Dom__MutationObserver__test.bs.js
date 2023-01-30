

import * as Caml_option from "rescript/lib/es6/caml_option.js";

var el = document.createElement("strong");

var observer = new MutationObserver((function (_records, _observer) {
        
      }));

observer.observe(el, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true
    });

observer.disconnect();

var records = observer.takeRecords();

var aRecord = records[0];

var recordType = aRecord.type;

var recordTarget = aRecord.target;

var recordAddedNodes = aRecord.addedNodes;

var recordRemovedNodes = aRecord.removedNodes;

var recordPrevSibling = aRecord.previousSibling;

var recordNextSibling = aRecord.nextSibling;

var recordAttributeName = aRecord.attributeName;

var recordAttributeNamespace = aRecord.attributeNamespace;

var recordOldValue = aRecord.oldValue;

var recordPrevSibling$1 = (recordPrevSibling == null) ? undefined : Caml_option.some(recordPrevSibling);

var recordNextSibling$1 = (recordNextSibling == null) ? undefined : Caml_option.some(recordNextSibling);

var recordAttributeName$1 = (recordAttributeName == null) ? undefined : Caml_option.some(recordAttributeName);

var recordAttributeNamespace$1 = (recordAttributeNamespace == null) ? undefined : Caml_option.some(recordAttributeNamespace);

var recordOldValue$1 = (recordOldValue == null) ? undefined : Caml_option.some(recordOldValue);

export {
  el ,
  observer ,
  records ,
  aRecord ,
  recordType ,
  recordTarget ,
  recordAddedNodes ,
  recordRemovedNodes ,
  recordPrevSibling$1 as recordPrevSibling,
  recordNextSibling$1 as recordNextSibling,
  recordAttributeName$1 as recordAttributeName,
  recordAttributeNamespace$1 as recordAttributeNamespace,
  recordOldValue$1 as recordOldValue,
  
}
/* el Not a pure module */
