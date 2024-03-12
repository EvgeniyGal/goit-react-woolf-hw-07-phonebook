import { configureStore } from '@reduxjs/toolkit';
import phoneBookContext from './phone-book';
import filterContext from './filter';

const store = configureStore({
  reducer: {
    phoneBook: phoneBookContext.reducer,
    filter: filterContext.reducer,
  },
});

export default store;
