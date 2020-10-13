import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Adventure from "./components/Album/Adventure";
import India from "./components/Album/India";
import Japan from "./components/Album/Japan";
import Blog from "./components/Blog/Blog";
import PostForm from "./components/Blog/PostForm";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import LoginPage from './components/LoginPage'

function App() {
  return (
    <>
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
              <Route path='/Login' component={LoginPage} />
              <Route
                path={["/CreatePost", "/ManagePost/:id"]}
                component={PostForm}
              />

              {/* <Route component={NotFound} /> */}
            </Switch>
          </Fragment>
        )}
      />
    </>
  );
}

export default withRouter(App);
