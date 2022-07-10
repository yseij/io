import "./App.css";

import UserList from "./components/user_list";
import UserDetail from "./components/user_detail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = function () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route path="/userDetail/:uuid" component={UserDetail} />
      </Switch>
    </Router>
  );
};

export default App;
