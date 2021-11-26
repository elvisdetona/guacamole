import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Products from "./Products";
import ProductEpisodes from "./ProductEpisodes";
import EpisodeDetail from "./EpisodeDetail";

function App() {
  return (
    <>
      <nav className="navigation">
        <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/episodes/:id">
          <ProductEpisodes />
        </Route>
        <Route path="/episode/:idDetail">
          <EpisodeDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;