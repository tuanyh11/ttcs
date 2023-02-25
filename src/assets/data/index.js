


export const fakeData = (num, schema) => {
  return Array.from([...new Array(num)], ( _, k) => {
    return {
     ...schema(k)
    }
  });
}
