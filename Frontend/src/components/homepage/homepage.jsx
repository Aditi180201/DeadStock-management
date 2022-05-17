import React from "react"
import "./homepage.css"
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/Sidebar";
import Home from "../../pages/home/home";
import ProductList from "../../pages/productList/ProductList";
import Product from "../../pages/product/Product";
import NewProduct from "../../pages/newProduct/NewProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from "../login/login";
function Homepage() {
    const [ user, setLoginUser] = useState({})
   
    useEffect(() => {
        setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
      }, [])
    
    const updateUser = (user) => {
        localStorage.setItem("MyUser", JSON.stringify(user))
        setLoginUser(user)
      }
    return (
        <Router>
             <Route>
                     {
                     user && user._id ? <Topbar updateUser={updateUser} /> : <Login updateUser={updateUser}/>  
                    }
                     </Route>
          
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </Router>
      );
}

export default Homepage;