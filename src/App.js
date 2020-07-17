import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import EditDetail from "./pages/EditDetail";
import PlayersPage from "./pages/PlayersPage";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/edit-detail" component={EditDetail} />
            <Route exact path="/players" component={PlayersPage} />
            <Route exact path="/sign-up-page" component={SignUp} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
