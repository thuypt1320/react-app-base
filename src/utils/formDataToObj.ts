export const objFD = (key, value) => {
  const keys = key.split('.');
  if (!key.includes('.')) {
    return ({
      [key]: value
    });
  }
  const result = {};

  if (keys.length === 2) {
    return ({
      [keys[0]]: {
        [keys[1]]: value
      }
    });
  }

  keys.forEach((k, i) => {
    const subkey = keys.splice(i + 1).join('.');
    result[k] = objFD(subkey, value);
  });

  return result;
};
