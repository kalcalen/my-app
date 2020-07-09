import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import EditDetail from "./pages/EditDetail";
import Parks from "./pages/Parks";
import Players from "./pages/Players";
import NotFound from "./pages/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/edit-detail" component={EditDetail} />
            <Route exact path="/parks" component={Parks} />
            <Route exact path="/players" component={Players} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
