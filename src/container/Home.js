import React, { Component, Fragment } from 'react';
// import Produk from './Produk/Produk.js'
import BlogPost from './Blog/BlogPost.js'
class Home extends Component {
    render(){
        return (
            // <Produk/>
            <div>
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}
export default Home;