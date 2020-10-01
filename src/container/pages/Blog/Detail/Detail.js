import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component{
    state = {
        post:{
            title: '',
            body: ''
        }
    }
    getData = () => {
        let idPost = this.props.match.params.idPost;
        axios.get(`http://localhost:3004/posts/${idPost}`)
        .then((res) => {
            let data = res.data;
            // console.log(data.title)
            this.setState({
                post:{
                    title: data.title,
                    body: data.body
                }
            })
        })
    }

    componentDidMount(){
        this.getData();
    }
    
    render(){
        return (
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}
export default Detail;