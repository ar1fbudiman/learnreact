import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Produk from './pages/Produk/Produk.js'
import BlogPost from './pages/Blog/BlogPost.js'
class Home extends Component {
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/produk">Produk</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <BlogPost/>
                        </Route>
                        <Route path="/produk">
                            <Produk/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Home;