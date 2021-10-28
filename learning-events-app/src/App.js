import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "./components/Nav";
import Home from './pages/Home'
import MapApp from "./components/MapApp";
import { Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const location = useLocation;
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
