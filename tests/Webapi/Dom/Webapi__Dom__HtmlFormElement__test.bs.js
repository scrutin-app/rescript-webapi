

import * as Curry from "rescript/lib/es6/curry.js";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as TestHelpers from "../../testHelpers.bs.js";
import * as Webapi__Dom__Document from "../../../src/Webapi/Dom/Webapi__Dom__Document.bs.js";
import * as Webapi__Dom__HtmlElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlElement.bs.js";
import * as Webapi__Dom__HtmlFormElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlFormElement.bs.js";
import * as Webapi__Dom__HtmlOptionElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlOptionElement.bs.js";
import * as Webapi__Dom__HtmlSelectElement from "../../../src/Webapi/Dom/Webapi__Dom__HtmlSelectElement.bs.js";
import * as Webapi__Dom__HtmlFormControlsCollection from "../../../src/Webapi/Dom/Webapi__Dom__HtmlFormControlsCollection.bs.js";

var partial_arg = document;

function createElement(param) {
  return partial_arg.createElement(param);
}

var partial_arg$1 = document;

function createTextNode(param) {
  return partial_arg$1.createTextNode(param);
}

function createInput(param) {
  return createElement("input");
}

function createLabelWithText(text) {
  var el = createElement("label");
  var textNode = createTextNode(text);
  el.appendChild(textNode);
  return el;
}

var formEl = createElement("form");

var form = TestHelpers.unsafelyUnwrapOption(Curry._1(Webapi__Dom__HtmlFormElement.ofElement, formEl));

var usernameInput = createElement("input");

usernameInput.setAttribute("type", "text");

usernameInput.setAttribute("name", "username");

usernameInput.setAttribute("value", "username");

var usernameLabel = createLabelWithText("Username:");

usernameLabel.appendChild(usernameInput);

var passwordInput = createElement("input");

passwordInput.setAttribute("type", "password");

passwordInput.setAttribute("name", "password");

passwordInput.setAttribute("value", "password");

var passwordLabel = createLabelWithText("Password:");

passwordLabel.appendChild(passwordInput);

var radioInput1 = createElement("input");

radioInput1.setAttribute("type", "radio");

radioInput1.setAttribute("name", "radiogroup");

radioInput1.setAttribute("value", "one");

radioInput1.setAttribute("checked", "true");

var radioLabel1 = createLabelWithText("Choice 1:");

radioLabel1.appendChild(radioInput1);

var radioInput2 = createElement("input");

radioInput2.setAttribute("type", "radio");

radioInput2.setAttribute("name", "radiogroup");

radioInput2.setAttribute("value", "two");

var radioLabel2 = createLabelWithText("Choice 2:");

radioLabel2.appendChild(radioInput2);

var select = createElement("select");

select.setAttribute("name", "select");

var selectLabel = createLabelWithText("Select:");

selectLabel.appendChild(select);

var usernameContainer = createElement("div");

var passwordContainer = createElement("div");

var radioContainer = createElement("div");

var selectContainer = createElement("div");

usernameContainer.appendChild(usernameLabel);

passwordContainer.appendChild(passwordLabel);

radioContainer.appendChild(radioLabel1);

radioContainer.appendChild(radioLabel2);

selectContainer.appendChild(selectLabel);

formEl.appendChild(usernameContainer);

formEl.appendChild(passwordContainer);

formEl.appendChild(radioContainer);

formEl.appendChild(selectContainer);

var body = TestHelpers.unsafelyUnwrapOption(Belt_Option.flatMap(Webapi__Dom__Document.asHtmlDocument(document), (function (prim) {
            return Caml_option.nullable_to_opt(prim.body);
          })));

body.appendChild(formEl);

var collection = form.elements;

console.log("HtmlFormElement.elements:", collection);

console.assert(!(collection == null), "collection exists");

var len = collection.length;

console.log("HtmlFormControlsCollection.length:", len);

console.assert(len === 5, "initial length is 5");

var el0 = collection.item(0);

var el0$1 = (el0 == null) ? undefined : Caml_option.some(el0);

console.log("HtmlFormControlsCollection.item:", el0$1);

console.assert(Belt_Option.isSome(el0$1), "item at index 0 exists");

var el0$2 = Webapi__Dom__HtmlFormControlsCollection.namedItem(collection, "username");

console.log("HtmlFormControlsCollection.namedItem:", el0$2);

console.assert(Belt_Option.isSome(el0$2), "namedItem 'username' exists");

var el1 = collection.item(1);

var el1$1 = (el1 == null) ? undefined : Caml_option.some(el1);

console.log("HtmlFormControlsCollection.item:", el1$1);

console.assert(Belt_Option.isSome(el1$1), "item at index 1 exists");

var el1$2 = Webapi__Dom__HtmlFormControlsCollection.namedItem(collection, "password");

console.log("HtmlFormControlsCollection.namedItem:", el1$2);

console.assert(Belt_Option.isSome(el1$2), "namedItem 'password' exists");

var radioNodeList = collection.item(2);

var radioNodeList$1 = (radioNodeList == null) ? undefined : Caml_option.some(radioNodeList);

console.log("HtmlFormControlsCollection.namedItem:", radioNodeList$1);

console.assert(Belt_Option.isSome(radioNodeList$1), "item at index 2 exists");

var radioNodeList$2 = Webapi__Dom__HtmlFormControlsCollection.namedItem(collection, "radiogroup");

console.log("HtmlFormControlsCollection.namedItem:", radioNodeList$2);

console.assert(Belt_Option.isSome(radioNodeList$2), "namedItem 'radiogroup' exists");

var radioNodeList$3 = TestHelpers.unsafelyUnwrapOption(radioNodeList$2);

if (radioNodeList$3.TAG === /* RadioNodeList */0) {
  var radioNodeList$4 = radioNodeList$3._0;
  console.log("RadioNodeList.value", radioNodeList$4.value);
  console.assert(radioNodeList$4.value === "one", "RadioNodeList.value is one");
} else {
  Js_exn.raiseError("incorrect namedItem return value");
}

var select$1 = TestHelpers.unsafelyUnwrapOption(Webapi__Dom__HtmlSelectElement.ofElement(select));

var opts = select$1.options;

console.log("HtmlSelectElement.options:", opts);

console.assert(!(opts == null), "HtmlSelectElement.options returns something");

opts.length = 3;

console.log("collection length:", opts.length);

console.assert(opts.length === 3, "setLength works");

opts[0] = null;

console.assert(opts.length === 2, "clearItem works");

console.log("collection length:", opts.length);

opts[2] = Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, createElement("option"));

console.assert(opts.length === 3, "setItem works");

console.log("collection length:", opts.length);

opts.length = 0;

var opt1 = createElement("option");

opt1.setAttribute("value", "1");

opt1.appendChild(createTextNode("opt1"));

opts.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt1)
      }).VAL, undefined);

opts.selectedIndex = 0;

console.assert(opts.selectedIndex === 0, "setSelectedIndex works");

console.log("collection length:", opts.length);

var opt2 = createElement("option");

opt2.setAttribute("value", "2");

opt2.appendChild(createTextNode("opt2"));

var item = opts.item(0);

var item$1 = (item == null) ? undefined : Caml_option.some(item);

console.assert(Belt_Option.isSome(item$1), "HtmlOptionsCollection.item should return an item");

console.log("HtmlOptionsCollection.item:", item$1);

console.log("collection length:", opts.length);

console.assert(opts.length === 1, "HtmlOptionsCollection.length should be 1");

opts.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt2)
      }).VAL, 0);

console.assert(opts.length === 2, "HtmlOptionsCollection.length should be 2");

var item$2 = opts.item(0);

console.assert(Belt_Option.isSome((item$2 == null) ? undefined : Caml_option.some(item$2)), "HtmlOptionsCollection.add works");

console.log("collection length:", opts.length);

console.log("selected index", opts.selectedIndex);

opts.selectedIndex = -1;

console.assert(opts.selectedIndex === -1, "HtmlOptionsCollection.clearSelectedIndex sets index to -1");

var opt3 = createElement("option");

opt3.setAttribute("value", "3");

opt3.appendChild(createTextNode("opt3"));

opts.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt3)
      }).VAL, ({
        NAME: "Element",
        VAL: Webapi__Dom__HtmlElement.ofElement(opt2)
      }).VAL);

var item$3 = opts.item(0);

console.log("HtmlOptionsCollection.add w/before:", (item$3 == null) ? undefined : Caml_option.some(item$3));

console.log("collection length:", opts.length);

var item$4 = opts.selectedIndex;

console.log("HtmlOptionsCollection.selectedIndex:", item$4);

var item$5 = opts.selectedIndex;

console.log("HtmlOptionsCollection.selectedIndex:", item$5);

opts.remove(0);

console.log("collection length:", opts.length);

console.assert(opts.length === 2, "HtmlOptionsCollection.remove works");

opts.length = 0;

select$1.length = 3;

console.log("collection length:", select$1.length);

console.assert(select$1.length === 3, "setLength works");

select$1[0] = null;

console.assert(select$1.length === 2, "clearItem works");

console.log("collection length:", select$1.length);

select$1[2] = Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, createElement("option"));

console.assert(select$1.length === 3, "setItem works");

console.log("collection length:", select$1.length);

select$1.length = 0;

var opt1$1 = createElement("option");

opt1$1.setAttribute("value", "1");

opt1$1.appendChild(createTextNode("opt1"));

select$1.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt1$1)
      }).VAL, undefined);

select$1.selectedIndex = 0;

console.assert(select$1.selectedIndex === 0, "setSelectedIndex works");

console.log("collection length:", select$1.length);

var opt2$1 = createElement("option");

opt2$1.setAttribute("value", "2");

opt2$1.appendChild(createTextNode("opt2"));

var item$6 = select$1.item(0);

var item$7 = (item$6 == null) ? undefined : Caml_option.some(item$6);

console.assert(Belt_Option.isSome(item$7), "HtmlSelectElement.item should return an item");

console.log("HtmlSelectElement.item:", item$7);

console.log("collection length:", select$1.length);

console.assert(select$1.length === 1, "HtmlSelectElement.length should be 1");

select$1.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt2$1)
      }).VAL, 0);

console.assert(select$1.length === 2, "HtmlSelectElement.length should be 2");

var item$8 = select$1.item(0);

console.assert(Belt_Option.isSome((item$8 == null) ? undefined : Caml_option.some(item$8)), "HtmlSelectElement.add works");

console.log("collection length:", select$1.length);

console.log("selected index", select$1.selectedIndex);

select$1.selectedIndex = -1;

console.assert(select$1.selectedIndex === -1, "HtmlSelectElement.clearSelectedIndex sets index to -1");

var opt3$1 = createElement("option");

opt3$1.setAttribute("value", "3");

opt3$1.appendChild(createTextNode("opt3"));

select$1.add(({
        NAME: "Option",
        VAL: Curry._1(Webapi__Dom__HtmlOptionElement.ofElement, opt3$1)
      }).VAL, ({
        NAME: "Element",
        VAL: Webapi__Dom__HtmlElement.ofElement(opt2$1)
      }).VAL);

var item$9 = select$1.item(0);

console.log("HtmlSelectElement.add w/before:", (item$9 == null) ? undefined : Caml_option.some(item$9));

console.log("collection length:", select$1.length);

var item$10 = select$1.selectedIndex;

console.log("HtmlSelectElement.selectedIndex:", item$10);

var item$11 = select$1.selectedIndex;

console.log("HtmlSelectElement.selectedIndex:", item$11);

select$1.remove(0);

console.log("collection length:", select$1.length);

console.assert(select$1.length === 2, "HtmlSelectElement.remove works");

function test_data(formElement) {
  return new FormData(formElement).get("username");
}

console.log(new FormData(form).get("username"));

export {
  createElement ,
  createTextNode ,
  createInput ,
  createLabelWithText ,
  formEl ,
  form ,
  usernameInput ,
  usernameLabel ,
  passwordInput ,
  passwordLabel ,
  radioInput1 ,
  radioLabel1 ,
  radioInput2 ,
  radioLabel2 ,
  selectLabel ,
  usernameContainer ,
  passwordContainer ,
  radioContainer ,
  selectContainer ,
  body ,
  collection ,
  len ,
  el0$2 as el0,
  el1$2 as el1,
  radioNodeList$2 as radioNodeList,
  select$1 as select,
  opts ,
  opt1$1 as opt1,
  opt2$1 as opt2,
  opt3$1 as opt3,
  item$11 as item,
  test_data ,
  
}
/* partial_arg Not a pure module */
