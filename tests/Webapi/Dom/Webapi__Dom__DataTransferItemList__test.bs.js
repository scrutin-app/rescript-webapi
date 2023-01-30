


var items = new DataTransfer().items;

var length = items.length;

var item = items[1];

items.add("text", "text/plain");

items.remove(10);

items.clear();

export {
  items ,
  length ,
  item ,
  
}
/* items Not a pure module */
