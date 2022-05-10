import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FaqAndDocs from "./components/policies/FaqAndDocs";
import HybridWorkArrPage from "./components/documents/HybridWorkArrPage";
import ResourcesPage from "./components/resources/ResourcesPage";
import PoliciesListPage from "./components/policieslist/PoliciesListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="left-nav">
          <h2>Left Nav</h2>
        </div>
        <div className="mainbody">
          <div>
            <h2>Header</h2>
          </div>
          <Switch>
            <Route path="/resources" exact component={ResourcesPage} />
            <Route path="/resources/:category" exact component={PoliciesListPage} />
            <Route path="/resources/:category/:topic" component={FaqAndDocs} />
            <Route path="/hybrid-work-arrangements" component={HybridWorkArrPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
