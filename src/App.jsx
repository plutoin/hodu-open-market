import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/app.css";
import "./styles/reset.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
}

export default App;
