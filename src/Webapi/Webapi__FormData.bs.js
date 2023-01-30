


function classify(t) {
  if (typeof t === "string") {
    return {
            NAME: "String",
            VAL: t
          };
  } else {
    return {
            NAME: "File",
            VAL: t
          };
  }
}

var EntryValue = {
  classify: classify
};

export {
  EntryValue ,
  
}
/* No side effect */
