// import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home"><Home></Home></Route>
        <Route path="/team/:idTeam"><TeamDetail></TeamDetail></Route>
        <Route exact path="/"><Home></Home></Route>
        <Route path="*"><NoMatch></NoMatch></Route>
      </Switch>
    </Router>
  );
}

export default App;
