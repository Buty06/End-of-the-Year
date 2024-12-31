function setState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getState(key, defaultValue) {
  const state = localStorage.getItem(key);
  return state ? JSON.parse(state) : defaultValue;
}
