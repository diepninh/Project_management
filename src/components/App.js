import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../Routes.js';
import {RedirectApp} from './RedirectApp.jsx';
import {RedirectAppFor}  from  './RedirectAppFor.jsx';
import {RedirectAppAfCh} from './RedirectAppAfCh.jsx';
import {RedirectAppReset} from './RedirectAppReset.jsx';
import { useSelector , useDispatch } from 'react-redux'
 
function App() {
  const statusLogin =  useSelector(state => state.SignIn.statusLogin)
  const showScreen = (routes) =>{
    const result = routes.map((route, index) =>{
      return(
        <Route
          key ={index}
          path = {route.path}
          exact={route.exact}
          component={route.main}
        />
      )
    })
    return <Switch>{result}</Switch>
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <RedirectApp statusLogin= {statusLogin}/>        
        </Route>
        <Route exact path='/forgetpass'>
          <RedirectAppFor statusLogin={statusLogin}/>
        </Route>
        <Route exact path='/changepassaflog'>
          <RedirectAppAfCh statusLogin={statusLogin}/>
        </Route>
        <Route path='/resetPass'>
          <RedirectAppReset statusLogin={statusLogin}/>
        </Route>
        {showScreen(routes)}
      </Switch>
    </Router>
  );
}


export default App;