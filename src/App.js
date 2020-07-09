import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import EditDetail from "./pages/EditDetail";
import Parks from "./pages/Parks";
import Players from "./pages/Players";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/edit-detail" component={EditDetail} />
            <Route exact path="/Parks" component={Parks} />
            <Route exact path="/Players" component={Players} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
