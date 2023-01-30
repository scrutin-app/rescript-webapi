

import * as Js_types from "rescript/lib/es6/js_types.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function makeArrayBuffer(url) {
  var ws = new WebSocket(url);
  ws.binaryType = "arraybuffer";
  return ws;
}

function isOpen(ws) {
  return ws.readyState === WebSocket.OPEN;
}

function messageIsText(message) {
  return Js_types.test(message.data, /* String */4);
}

function messageAsText(message) {
  if (Js_types.test(message.data, /* String */4)) {
    return message.data;
  }
  
}

function messageAsBinary(message) {
  if (!Js_types.test(message.data, /* String */4)) {
    return Caml_option.some(message.data);
  }
  
}

export {
  makeArrayBuffer ,
  isOpen ,
  messageIsText ,
  messageAsText ,
  messageAsBinary ,
  
}
/* No side effect */
