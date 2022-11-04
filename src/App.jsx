import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import "./styles/reset.css";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Join from "./pages/Join/Join";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/join" exact component={Join} />
        <Route path="/join/seller" exact component={Join} />
        <Route
          path="/productDetail/:product_id"
          exact
          component={ProductDetail}
        />
        <Route path="/cart" exact component={Cart} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/404" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
