

import * as Caml_option from "rescript/lib/es6/caml_option.js";

var testRadioNodeList = (function(el) {
    if ((el.constructor.name != null && el.constructor.name === "RadioNodeList")
      || /^\[object RadioNodeList\]$/.test(el.constructor.toString())) {
      return el;
    }
  });

function namedItem(t, name) {
  var value = t.namedItem(name);
  if (value == null) {
    return ;
  }
  var radioNodeList = testRadioNodeList(value);
  if (radioNodeList !== undefined) {
    return {
            TAG: /* RadioNodeList */0,
            _0: Caml_option.valFromOption(radioNodeList)
          };
  }
  var match = value.tagName.toUpperCase();
  switch (match) {
    case "BUTTON" :
        return {
                TAG: /* Button */1,
                _0: value
              };
    case "FIELDSET" :
        return {
                TAG: /* FieldSet */2,
                _0: value
              };
    case "INPUT" :
        return {
                TAG: /* Input */3,
                _0: value
              };
    case "OBJECT" :
        return {
                TAG: /* Object */4,
                _0: value
              };
    case "OUTPUT" :
        return {
                TAG: /* Output */5,
                _0: value
              };
    case "SELECT" :
        return {
                TAG: /* Select */6,
                _0: value
              };
    case "TEXTAREA" :
        return {
                TAG: /* TextArea */7,
                _0: value
              };
    default:
      return ;
  }
}

export {
  namedItem ,
  
}
/* No side effect */
