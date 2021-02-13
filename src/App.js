import React from "react";
import Characters from "./components/Characters"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>

      </div>
      
    </Router>
  );
}
export default App;
