import { objFD } from 'src/utils/formDataToObj';
export const formValue = (e) => {
  const formData = new FormData(e.target);
  let formObj = {};

  formData.forEach((value, key) => {
    const item = objFD(key, value);
    formObj = {
      ...formObj,
      ...item
    };
  });

  return formObj;
};
