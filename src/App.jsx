import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import India from "./components/Album/India";
import Japan from "./components/Album/Japan";
import Blog from "./components/Blog/Blog";
import LoginPage from "./components/LoginPage";
import PostForm from "./components/Blog/components/PostForm";
import Alaska from "./components/Album/Alaska";
import Pacific from "./components/Album/PacificNW";
import Rockies from "./components/Album/Rockies";
import Utah from "./components/Album/Utah";
import WestUS from "./components/Album/WestUS";
import America from "./components/Album/America";
import C130 from "./components/Album/C130";
import Aerial from "./components/Album/Aerial";
import PacificNW from "./components/Album/PacificNW";
import About from "./components/AboutPage/About";
import Contact from "./components/AboutPage/Contact";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/HomePage/Homepage";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/Albums/Alaska" component={Alaska} />
              <Route exact path="/Albums/Japan" component={Japan} />
              <Route exact path="/Albums/India" component={India} />
              <Route exact path="/Albums/Rockies" component={Rockies} />
              <Route exact path="/Albums/Utah" component={Utah} />
              <Route exact path="/Albums/WestUS" component={WestUS} />
              <Route exact path="/Albums/Pacific" component={Pacific} />
              <Route exact path="/Albums/PacificNW" component={PacificNW} />
              <Route exact path="/Albums/America" component={America} />
              <Route exact path="/Albums/C130" component={C130} />
              <Route exact path="/Albums/Aerial" component={Aerial} />

              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
              <Route path="/Login" component={LoginPage} />
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
