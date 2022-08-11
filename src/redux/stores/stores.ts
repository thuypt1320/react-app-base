import { legacy_createStore as createStore } from 'redux';
import { middleware } from 'src/redux/middleware';
import { reducers } from 'src/redux/reducers';

export const stores = createStore(reducers, middleware);

export const subscribe = (listener) => {
  stores.subscribe(listener);
};
