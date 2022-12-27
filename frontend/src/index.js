import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import { Router } from "react-router-dom";
import browserHistory from "./utils/history";
import CssBaseline from "@material-ui/core/CssBaseline";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={reduxStore}>
    <CssBaseline />
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
