

import * as Curry from "rescript/lib/es6/curry.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function encodeRequestMethod(x) {
  if (typeof x !== "number") {
    return x._0;
  }
  switch (x) {
    case /* Get */0 :
        return "GET";
    case /* Head */1 :
        return "HEAD";
    case /* Post */2 :
        return "POST";
    case /* Put */3 :
        return "PUT";
    case /* Delete */4 :
        return "DELETE";
    case /* Connect */5 :
        return "CONNECT";
    case /* Options */6 :
        return "OPTIONS";
    case /* Trace */7 :
        return "TRACE";
    case /* Patch */8 :
        return "PATCH";
    
  }
}

function encodeReferrerPolicy(x) {
  switch (x) {
    case /* None */0 :
        return "";
    case /* NoReferrer */1 :
        return "no-referrer";
    case /* NoReferrerWhenDowngrade */2 :
        return "no-referrer-when-downgrade";
    case /* SameOrigin */3 :
        return "same-origin";
    case /* Origin */4 :
        return "origin";
    case /* StrictOrigin */5 :
        return "strict-origin";
    case /* OriginWhenCrossOrigin */6 :
        return "origin-when-cross-origin";
    case /* StrictOriginWhenCrossOrigin */7 :
        return "strict-origin-when-cross-origin";
    case /* UnsafeUrl */8 :
        return "unsafe-url";
    
  }
}

function encodeRequestMode(x) {
  switch (x) {
    case /* Navigate */0 :
        return "navigate";
    case /* SameOrigin */1 :
        return "same-origin";
    case /* NoCORS */2 :
        return "no-cors";
    case /* CORS */3 :
        return "cors";
    
  }
}

function encodeRequestCredentials(x) {
  switch (x) {
    case /* Omit */0 :
        return "omit";
    case /* SameOrigin */1 :
        return "same-origin";
    case /* Include */2 :
        return "include";
    
  }
}

function encodeRequestCache(x) {
  switch (x) {
    case /* Default */0 :
        return "default";
    case /* NoStore */1 :
        return "no-store";
    case /* Reload */2 :
        return "reload";
    case /* NoCache */3 :
        return "no-cache";
    case /* ForceCache */4 :
        return "force-cache";
    case /* OnlyIfCached */5 :
        return "only-if-cached";
    
  }
}

function encodeRequestRedirect(x) {
  switch (x) {
    case /* Follow */0 :
        return "follow";
    case /* Error */1 :
        return "error";
    case /* Manual */2 :
        return "manual";
    
  }
}

var HeadersInit = {};

var $$Headers = {};

var BodyInit = {};

function map(f, x) {
  if (x !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(x)));
  }
  
}

function make(method_, headers, body, referrer, referrerPolicyOpt, mode, credentials, cache, redirect, integrityOpt, keepalive, signal) {
  var referrerPolicy = referrerPolicyOpt !== undefined ? referrerPolicyOpt : /* None */0;
  var integrity = integrityOpt !== undefined ? integrityOpt : "";
  var partial_arg = integrity;
  var partial_arg$1 = map(encodeRequestRedirect, redirect);
  var partial_arg$2 = map(encodeRequestCache, cache);
  var partial_arg$3 = map(encodeRequestCredentials, credentials);
  var partial_arg$4 = map(encodeRequestMode, mode);
  var partial_arg$5 = encodeReferrerPolicy(referrerPolicy);
  var partial_arg$6 = map(encodeRequestMethod, method_);
  return function (param) {
    var tmp = {};
    if (partial_arg$6 !== undefined) {
      tmp.method = partial_arg$6;
    }
    if (headers !== undefined) {
      tmp.headers = Caml_option.valFromOption(headers);
    }
    if (body !== undefined) {
      tmp.body = Caml_option.valFromOption(body);
    }
    if (referrer !== undefined) {
      tmp.referrer = referrer;
    }
    if (partial_arg$5 !== undefined) {
      tmp.referrerPolicy = partial_arg$5;
    }
    if (partial_arg$4 !== undefined) {
      tmp.mode = partial_arg$4;
    }
    if (partial_arg$3 !== undefined) {
      tmp.credentials = partial_arg$3;
    }
    if (partial_arg$2 !== undefined) {
      tmp.cache = partial_arg$2;
    }
    if (partial_arg$1 !== undefined) {
      tmp.redirect = partial_arg$1;
    }
    if (partial_arg !== undefined) {
      tmp.integrity = partial_arg;
    }
    if (keepalive !== undefined) {
      tmp.keepalive = keepalive;
    }
    if (signal !== undefined) {
      tmp.signal = Caml_option.valFromOption(signal);
    }
    return tmp;
  };
}

function method_(self) {
  var x = self.method;
  switch (x) {
    case "CONNECT" :
        return /* Connect */5;
    case "DELETE" :
        return /* Delete */4;
    case "GET" :
        return /* Get */0;
    case "HEAD" :
        return /* Head */1;
    case "OPTIONS" :
        return /* Options */6;
    case "PATCH" :
        return /* Patch */8;
    case "POST" :
        return /* Post */2;
    case "PUT" :
        return /* Put */3;
    case "TRACE" :
        return /* Trace */7;
    default:
      return /* Other */{
              _0: x
            };
  }
}

function destination(self) {
  var x = self.destination;
  switch (x) {
    case "" :
        return /* None */0;
    case "document" :
        return /* Document */1;
    case "embed" :
        return /* Embed */2;
    case "font" :
        return /* Font */3;
    case "image" :
        return /* Image */4;
    case "manifest" :
        return /* Manifest */5;
    case "media" :
        return /* Media */6;
    case "object" :
        return /* Object */7;
    case "report" :
        return /* Report */8;
    case "script" :
        return /* Script */9;
    case "serviceworker" :
        return /* ServiceWorker */10;
    case "sharedworder" :
        return /* SharedWorker */11;
    case "style" :
        return /* Style */12;
    case "worker" :
        return /* Worker */13;
    case "xslt" :
        return /* Xslt */14;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown requestDestination: " + x,
            Error: new Error()
          };
  }
}

function referrerPolicy(self) {
  var x = self.referrerPolicy;
  switch (x) {
    case "" :
        return /* None */0;
    case "no-referrer" :
        return /* NoReferrer */1;
    case "no-referrer-when-downgrade" :
        return /* NoReferrerWhenDowngrade */2;
    case "origin" :
        return /* Origin */4;
    case "origin-when-cross-origin" :
        return /* OriginWhenCrossOrigin */6;
    case "same-origin" :
        return /* SameOrigin */3;
    case "strict-origin" :
        return /* StrictOrigin */5;
    case "strict-origin-when-cross-origin" :
        return /* StrictOriginWhenCrossOrigin */7;
    case "unsafe-url" :
        return /* UnsafeUrl */8;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown referrerPolicy: " + x,
            Error: new Error()
          };
  }
}

function mode(self) {
  var x = self.mode;
  switch (x) {
    case "cors" :
        return /* CORS */3;
    case "navigate" :
        return /* Navigate */0;
    case "no-cors" :
        return /* NoCORS */2;
    case "same-origin" :
        return /* SameOrigin */1;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown requestMode: " + x,
            Error: new Error()
          };
  }
}

function credentials(self) {
  var x = self.credentials;
  switch (x) {
    case "include" :
        return /* Include */2;
    case "omit" :
        return /* Omit */0;
    case "same-origin" :
        return /* SameOrigin */1;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown requestCredentials: " + x,
            Error: new Error()
          };
  }
}

function cache(self) {
  var x = self.cache;
  switch (x) {
    case "default" :
        return /* Default */0;
    case "force-cache" :
        return /* ForceCache */4;
    case "no-cache" :
        return /* NoCache */3;
    case "no-store" :
        return /* NoStore */1;
    case "only-if-cached" :
        return /* OnlyIfCached */5;
    case "reload" :
        return /* Reload */2;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown requestCache: " + x,
            Error: new Error()
          };
  }
}

function redirect(self) {
  var x = self.redirect;
  switch (x) {
    case "error" :
        return /* Error */1;
    case "follow" :
        return /* Follow */0;
    case "manual" :
        return /* Manual */2;
    default:
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unknown requestRedirect: " + x,
            Error: new Error()
          };
  }
}

var $$Request = {
  method_: method_,
  destination: destination,
  referrerPolicy: referrerPolicy,
  mode: mode,
  credentials: credentials,
  cache: cache,
  redirect: redirect
};

function make$1(status, statusText, headers) {
  return function (param) {
    var tmp = {};
    if (status !== undefined) {
      tmp.status = status;
    }
    if (statusText !== undefined) {
      tmp.statusText = statusText;
    }
    if (headers !== undefined) {
      tmp.headers = Caml_option.valFromOption(headers);
    }
    return tmp;
  };
}

var ResponseInit = {
  make: make$1
};

var $$Response = {};

var $$AbortController;

var $$FormData;

var Body = {};

var RequestInit = {
  make: make
};

export {
  $$AbortController ,
  $$FormData ,
  HeadersInit ,
  $$Headers ,
  BodyInit ,
  Body ,
  RequestInit ,
  $$Request ,
  ResponseInit ,
  $$Response ,
  
}
/* No side effect */
