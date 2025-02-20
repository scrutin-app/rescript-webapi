


function test_arrayBuffer(blob) {
  return blob.arrayBuffer().then(function (buffer) {
              return Promise.resolve((console.log(buffer.byteLength), undefined));
            });
}

function test_size(blob) {
  console.log(blob.size);
  
}

function test_slice(blob) {
  var blob$1 = blob.slice(0, undefined, undefined);
  console.log(blob$1.size);
  
}

function test_stream(blob) {
  return blob.stream();
}

function test_text(blob) {
  return blob.text().then(function (string) {
              return Promise.resolve((console.log(string), undefined));
            });
}

function test_type(blob) {
  console.log(blob.type);
  
}

var test_blobPropertyBag = {
  type: "text/plain",
  endings: "transparent"
};

var test_blobPropertyBagTypeOnly = {
  type: "text/plain"
};

var test_blobPropertyBagNone = {};

var test_blobPart_blob = new Blob([]);

function test_blobPart_arrayBuffer(blob) {
  return blob.arrayBuffer().then(function (buffer) {
              return Promise.resolve(buffer);
            });
}

var test_blobPart_int8Array = new Int8Array(10);

var test_blobPart_uint8Array = new Uint8Array(10);

var test_blobPart_uint8ClampedArray = new Uint8ClampedArray(10);

var test_blobPart_int16Array = new Int16Array(10);

var test_blobPart_int32Array = new Int32Array(10);

var test_blobPart_uint32Array = new Uint32Array(10);

var test_blobPart_float32 = new Float32Array(10);

var test_blobPart_float64Array = new Float64Array(10);

function test_blobPart_dataView(blob) {
  return blob.arrayBuffer().then(function (buffer) {
              return Promise.resolve(new DataView(buffer));
            });
}

var test_blob = new Blob([]);

var test_blobWithOptions = new Blob(["hello"], {});

var test_blobPart_string = "hello";

export {
  test_arrayBuffer ,
  test_size ,
  test_slice ,
  test_stream ,
  test_text ,
  test_type ,
  test_blobPropertyBag ,
  test_blobPropertyBagTypeOnly ,
  test_blobPropertyBagNone ,
  test_blobPart_string ,
  test_blobPart_blob ,
  test_blobPart_arrayBuffer ,
  test_blobPart_int8Array ,
  test_blobPart_uint8Array ,
  test_blobPart_uint8ClampedArray ,
  test_blobPart_int16Array ,
  test_blobPart_int32Array ,
  test_blobPart_uint32Array ,
  test_blobPart_float32 ,
  test_blobPart_float64Array ,
  test_blobPart_dataView ,
  test_blob ,
  test_blobWithOptions ,
  
}
/* test_blobPart_blob Not a pure module */
