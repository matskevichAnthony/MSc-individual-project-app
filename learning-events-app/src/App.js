import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "./components/Nav";
import Home from './pages/Home'
import { Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Events from "./pages/Events";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
