export const useQueryPrams = (url = '') => {
  const paramsObj = new URLSearchParams(url ? url : window.location.search);
  let newObj: { [key: string]: any } = {};
  for (const [key, value] of paramsObj) {
    newObj[key] = value;
  }
  return newObj;
};
