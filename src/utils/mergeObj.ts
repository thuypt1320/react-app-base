export const mergeObj = (o1, o2) => {
  const keysO1 = Object.keys(o1);
  const keysO2 = Object.keys(o2);
  const result = {};
  if (keysO1[0] === keysO2[0]) {
    result[keysO1[0]] = {
      ...o1[keysO1[0]],
      ...o2[keysO2[0]]
    };
  }

  const subkeysO1 = Object.keys(keysO1[0]);
  const subkeysO2 = Object.keys(keysO2[0]);

  mergeObj(subkeysO1, subkeysO2);
  return result;
};
