const cache = new WeakMap();

export default function useAsyncData(fn, key) {
  let data = cache.get(key || fn);
  if (!data) {
    data = fn().then(value => cache.set(key || fn, value));
    cache.set(key || fn, data);
  }

  if (isPromise(data)) {
    throw data;
  }

  return data;
}

function isPromise(value) {
  if (value && typeof value.then === "function") {
    return true;
  }

  return false;
}
