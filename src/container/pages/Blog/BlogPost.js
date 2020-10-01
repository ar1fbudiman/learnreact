import React, {Component, Fragment} from 'react';
import Post from './PostComp/PostComp.js';
import './BlogPost.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class BlogPost extends Component{
    state = {
        post : [],
        formBlogPost: {
            id: 1,
            userId: 1,
            title: '',
            body: '',
        },
        isUpdate: false
    }

    getData = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    postData = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            this.getData();
            this.setState({
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: '',
                },
            })
        }, (err) => {
            console.log('error', err);
        })
    }

    putData = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            this.getData();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: '',
                },
            })
        }, (err) => {
            console.log('error', err);
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) =>  
            this.getData()
        )
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        formBlogPostNew[event.target.name] = event.target.value;
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleFormSubmit = () => {
        if(this.state.isUpdate){
            this.putData();
        }else{
            this.postData();
        }
    }

    handleDetail = (id) => {
        // console.log(this)
        this.props.history.push(`/detail/${id}`);
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <label>Judul</label>
                                <input type="text" name="title" className="form-control" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>
                                <label>Body</label>
                                <textarea name="body" className="form-control" value={this.state.formBlogPost.body} onChange={this.handleFormChange}/>
                                <button className="btn btn-success" onClick={this.handleFormSubmit}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="section-title">Recent Posts</p>
                {
                    this.state.post.map(post => {
                        return <Post 
                                    key={post.id} 
                                    data={post} 
                                    update={this.handleUpdate} 
                                    remove={this.handleRemove} 
                                    detail={this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;