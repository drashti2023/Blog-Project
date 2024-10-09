import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostForm = ({ currentPost, setCurrentPost, fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentPost) {
            setTitle(currentPost.title);
            setContent(currentPost.content);
        } else {
            resetForm();
        }
    }, [currentPost]);

    const resetForm = () => {
        setTitle('');
        setContent('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentPost) {
            await axios.put(`http://localhost:3000/api/posts/${currentPost._id}`, { title, content });
        } else {
            await axios.post('http://localhost:3000/api/posts', { title, content });

        }

        await fetchPosts(); 
        setCurrentPost(null);
        resetForm();
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    className="form-control" 
                    value={title} 
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea 
                    id="content" 
                    className="form-control" 
                    rows="4" 
                    value={content} 
                    placeholder="Enter content"
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">
                {currentPost ? 'Update Post' : 'Create Post'}
            </button>
        </form>
        </>
    );
};

export default PostForm;
