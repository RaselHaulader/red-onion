import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './PrivateRoutue/PrivateRoute'

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signIn'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/cart'>
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/details/:id">
              <FoodDetails></FoodDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
