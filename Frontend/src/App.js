import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import NewProduct from "./pages/newProduct/NewProduct.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}>
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login"  component={Login}>
            <Login updateUser={updateUser}/> 
          </Route>
          <Route path="/register" component={Register}>
          </Route>
          <Route path="/newproduct" component={NewProduct}>
          </Route>
          <Route path="/404">
          <h1>404 - Not found</h1>
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;