import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FaqAndDocs from "./components/policies/FaqAndDocs";
import HybridWorkArrPage from "./components/documents/HybridWorkArrPage";
import ResourcesPage from "./components/resources/ResourcesPage";
import PoliciesListPage from "./components/policieslist/PoliciesListPage";
import React from "react";
//import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Documents from "./pages/Documents/Documents";
import Events from "./pages/Events";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar>
          <div className="mainbody">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Documents} />
              <Route path="/documents" exact component={Documents} />
              <Route path="/events" exact component={Events} />
              <Route path="/resources" exact component={ResourcesPage} />
              <Route
                path="/resources/:category"
                exact
                component={PoliciesListPage}
              />
              <Route
                path="/resources/:category/:topic"
                component={FaqAndDocs}
              />
              <Route
                path="/hybrid-work-arrangements"
                component={HybridWorkArrPage}
              />
            </Switch>
          </div>
          </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
