import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/posts/${id}`);
        fetchPosts(); 
    };

    return (
        <>
        <div className="container-fluid bg-dark text-white">
            <div className="row">
                <div className="col-md-4 p-4">
                    <h2 className="mb-4">Create Post</h2>
                    <PostForm 
                        currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        fetchPosts={fetchPosts} 
                    />
                </div>
                <div className="col-md-8 p-4">
                    <h2 className="mb-4">Blog Posts</h2>
                    <div className="list-group">
                        <PostList 
                            posts={posts} 
                            setCurrentPost={setCurrentPost} 
                            handleDelete={handleDelete} 
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
