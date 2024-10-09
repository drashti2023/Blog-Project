import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post, setCurrentPost, handleDelete }) => {
  return (
    <>
    <li className="list-group-item bg-dark text-light mb-3">
      <h5 className="mb-1">{post.title}</h5>
      <p className="mb-2">{post.content}</p>
      <div className="d-flex justify-content-between">
        <button 
          onClick={() => setCurrentPost(post)} 
          className="btn btn-warning me-2" 
          aria-label={`Edit ${post.title}`}>
          Edit
        </button>
        <button 
          onClick={() => handleDelete(post._id)} 
          className="btn btn-danger" 
          aria-label={`Delete ${post.title}`}>
          Delete
        </button>
      </div>
    </li>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentPost: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Post;
