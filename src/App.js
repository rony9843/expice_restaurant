import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <Layout />
            </Route>

            <Route path="/">
              <Layout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
