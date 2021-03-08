import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from '../routes.js';
import { RedirectApp } from './redirectApp.jsx';
import { RedirectAppFor } from './redirectAppFor.jsx';
import { RedirectAppReset } from './redirectAppReset.jsx';
import { useSelector } from 'react-redux'

function App() {
  const statusLogin = useSelector(state => state.SignIn.statusLogin)
  const showScreen = (routes) => {
    return <Switch>
      {
        routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          )
        })
      }
    </Switch>
  }
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <RedirectApp statusLogin={statusLogin} />
        </Route>
        <Route exact path='/forgetpass'>
          <RedirectAppFor statusLogin={statusLogin} />
        </Route>
        <Route path='/resetPass'>
          <RedirectAppReset statusLogin={statusLogin} />
        </Route>
        {showScreen(routes)}
      </Switch>
    </Router>
  );
}

export default App;
