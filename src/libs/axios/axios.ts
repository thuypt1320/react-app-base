import { createAxios } from 'src/libs/axios/createAxios';

export const axiosWithAuth = createAxios();
export const axiosWithoutAuth = createAxios({ withAuthToken: false });
