import React, {Component, Fragment} from 'react';
import Post from '../../component/PostComp/PostComp.js';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component{
    state = {
        post : []
    }
    // constructor(props) {
    //     // super(props);

    //     this.state = { name : "EventTestName" };
    // }

    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(function (response) {
        //     this.setState({
        //         post: response.data
        //     })
        //     // console.log(response.data)
        // })
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({
                    post: json
                }))
    }

    render() {
        
        return (
            <Fragment>
                <p className="section-title">Recent Posts</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;