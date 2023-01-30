


function test_lastModified(file) {
  console.log(file.lastModified);
  
}

function test_name(file) {
  console.log(file.name);
  
}

var test_filePropertyBag = {
  endings: "transparent",
  type: "text/plain",
  lastModified: 123.0
};

var test_filePropertyBagNone = {};

var test_make = new File(["hello"], "hello.txt");

var test_makeWithOptions = new File(["hello"], "hello.txt", {
      type: "text/plain"
    });

export {
  test_lastModified ,
  test_name ,
  test_filePropertyBag ,
  test_filePropertyBagNone ,
  test_make ,
  test_makeWithOptions ,
  
}
/* test_make Not a pure module */
