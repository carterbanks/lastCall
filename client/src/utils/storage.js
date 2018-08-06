export function getFromStorage(key) {
  if(!key) {
    return null;
  }
  try {
    const valueStr = localStorage.getItem(key);
    if (valueStr) {
      return JSON.parse(valueStr);
    } 
    return null;
    console.log(key);
  } catch(err) {
    return null;
  }
}

export function setInStorage(key, obj) {
  if(!key) {
    console.log("Error key is missing");
  }
  try {
    localStorage.setItem(key, JSON.stringify(obj));
    console.log(key, obj);
  } catch(err) {
    console.log(err);
  }
}