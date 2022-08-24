import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/app.css";
import "./styles/reset.css";

import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
