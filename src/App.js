import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/404" component={NotFound} />
            <Route path="*" component={NotFound} status={404} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
