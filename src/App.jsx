import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import "./styles/reset.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Route path="/join/seller" exact component={Join} />
        <Route path="/productDetail" exact component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
