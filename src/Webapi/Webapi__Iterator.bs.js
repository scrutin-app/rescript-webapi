


function forEach(f, t) {
  while(true) {
    var item = t.next();
    var match = item.done;
    var match$1 = item.value;
    if (match !== undefined && match) {
      if (!(match$1 == null)) {
        return f(match$1);
      } else {
        return ;
      }
    }
    if (match$1 == null) {
      continue ;
    }
    f(match$1);
    continue ;
  };
}

export {
  forEach ,
  
}
/* No side effect */
