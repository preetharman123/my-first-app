import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
 
import currencyReducer from "./slices/currencySlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
  key: "@my-app",
  storage,
  //blacklist: ["currency"],
};
 
const rootReducer = combineReducers({
  // data: reducer
  currency: currencyReducer,
  cart: cartReducer,
  user: userReducer
});
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const appStore = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(appStore);
 












// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import currencyReducer from './slices/currencySlice';
// import cartReducer from './slices/cartSlice';

// //new code  using redux perist
// const persistConfig = {
//     key: "@my-app",
//     storage,
//     blacklist: ["currency"]
// }

// //new code  using redux perist
// const rootReducer = combineReducers({
//     //data: reducer
//     currency: currencyReducer,
//     cart: cartReducer
// })


// //new code  using redux perist
// const persistedReducer = persistReducer(persistConfig, rootReducer)
  
// export const appStore = configureStore({
//     reducer: persistedReducer
// });

// //new code  using redux perist
// export const persistor = persistStore(appStore);

// //old code without using redux perist
// // const appStore = configureStore({
// //     reducer: {
// //         //data: reducer
// //         currency: currencyReducer,
// //         cart: cartReducer
// //     }
// // });
// //export default appStore;