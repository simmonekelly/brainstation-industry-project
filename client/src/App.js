import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PoliciesPage from "./components/policies/PoliciesPage";
import HybridWorkArrPage from "./components/documents/HybridWorkArrPage";

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
            <Route path="/policies" component={PoliciesPage} />
            <Route path="/hybrid-work-arrangements" component={HybridWorkArrPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
