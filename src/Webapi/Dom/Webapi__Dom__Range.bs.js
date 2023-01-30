

import * as Webapi__Dom__Types from "./Webapi__Dom__Types.bs.js";

function compareBoundaryPoint(self, how, range) {
  return Webapi__Dom__Types.decodeCompareResult(self.compareBoundaryPoints(Webapi__Dom__Types.encodeCompareHow(how), range));
}

function comparePoint(self, node, offset) {
  return Webapi__Dom__Types.decodeCompareResult(self.comparePoint(node, offset));
}

export {
  compareBoundaryPoint ,
  comparePoint ,
  
}
/* No side effect */
