import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Adventure from "./components/Album/Adventure";
import Album from "./components/Album/Adventure";
import India from "./components/Album/India";
import Japan from "./components/Album/Japan";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/Albums/Adventure" component={Adventure} />
              <Route exact path="/Albums/India" component={India} />
              <Route exact path="/Albums/Japan" component={Japan} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />

              {/* <Route component={NotFound} /> */}
            </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default withRouter(App);
