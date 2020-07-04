import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StoreProvider } from "./utils/GlobalState";
import Home from './pages/Home';
import Directory from './pages/Directory';
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";




function App() {
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <StoreProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/directory' component={Directory} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>

  )

}

export default App;
