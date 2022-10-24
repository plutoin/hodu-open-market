import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import rootReducer from "./redux/reducer";
import App from "./App";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
