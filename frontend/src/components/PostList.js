import React from 'react';
import Post from './Post'; 
import './PostList.css'; 

const PostList = ({ posts, setCurrentPost, handleDelete }) => {
    return (
        <>
       <div className="list-group">
            {posts.map((post) => (
                <div key={post._id} className="list-group-item list-group-item-action bg-dark text-light mb-2">
                    <Post 
                        post={post} 
                        setCurrentPost={setCurrentPost} 
                        handleDelete={handleDelete} 
                    />
                </div>
            ))}
        </div>
        </>
    );
};

export default PostList;
