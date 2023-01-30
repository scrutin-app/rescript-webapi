

import * as Pervasives from "rescript/lib/es6/pervasives.js";

var Composite = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-atop",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor"
};

var LineCap = {
  butt: "butt",
  round: "round",
  square: "square"
};

var LineJoin = {
  round: "round",
  bevel: "bevel",
  miter: "miter"
};

function reifyStyle(x) {
  var isCanvasGradient = (function(x) { return x instanceof CanvasGradient; });
  var isCanvasPattern = (function(x) { return x instanceof CanvasPattern; });
  return [
          typeof x === "string" ? /* String */0 : (
              isCanvasGradient(x) ? /* Gradient */1 : (
                  isCanvasPattern(x) ? /* Pattern */2 : Pervasives.invalid_arg("Unknown canvas style kind. Known values are: String, CanvasGradient, CanvasPattern")
                )
            ),
          x
        ];
}

function fillStyle(ctx) {
  return reifyStyle(ctx.fillStyle);
}

function strokeStyle(ctx) {
  return reifyStyle(ctx.strokeStyle);
}

export {
  Composite ,
  LineCap ,
  LineJoin ,
  reifyStyle ,
  fillStyle ,
  strokeStyle ,
  
}
/* No side effect */
