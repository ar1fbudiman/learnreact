import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/640/480/tech" alt="post-img"/>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="btn btn-success btn-sm" onClick={() => props.update(props.data)}>Ubah</button>
                <button className="btn btn-danger btn-sm" onClick={() => props.remove(props.data.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;