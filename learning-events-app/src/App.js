import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { Router, Switch, Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import MyEvents from "./pages/MyEvents";
import { AnimatePresence } from 'framer-motion';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const location = useLocation();
  let { topicId } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path={`/events/:eventId`} exact>
            <EventPage />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <SignUp />
          </Route>
          <Route path="/myevents" exact>
            <MyEvents />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
