import "./App.css";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Rentpage from "./Rentpage";
import Basket from "./Basket";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Signup">
            <Signup></Signup>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Rentacar">
            <Rentpage></Rentpage>
          </Route>
          <Route path="/Basket">
            <Basket></Basket>
          </Route>
          <Route path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
