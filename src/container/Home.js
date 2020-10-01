import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Produk from './pages/Produk/Produk.js'
import BlogPost from './pages/Blog/BlogPost.js'
import Detail from './pages/Blog/Detail/Detail.js'

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
                        <Route exact path="/" component={BlogPost} />
                        <Route path="/detail/:idPost" component={Detail} />
                        <Route path="/produk" component={Produk}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Home;