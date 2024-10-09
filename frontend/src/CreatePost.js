import React from 'react';
import PostForm from './components/PostForm';

const CreatePost = ({ currentPost, setCurrentPost, fetchPosts }) => {
    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center text-light">
                {currentPost ? 'Edit Post' : 'Create a New Post'}
            </h1>
            <div className="card bg-dark text-light p-4">
            <PostForm 
                        currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        fetchPosts={fetchPosts}
                        
                    />
                {/* <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea
                            id="content"
                            className="form-control"
                            rows="4"
                            placeholder="Enter content"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        {currentPost ? 'Update Post' : 'Create Post'}
                    </button>
                </form> */}
            </div>
        </div>
        </>
    );
};

export default CreatePost;
//creates post but facing runtime error which just needs a refresh