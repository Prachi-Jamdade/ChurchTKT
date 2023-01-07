function checkObj(obj) {
  let keys = Object.keys(obj);
  for (let index in keys) {
    if (!obj[keys[index]]) {
      return false;
    }
  }
  return true;
}

export {checkObj};
