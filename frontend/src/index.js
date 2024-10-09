import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Home';
import CreatePost from './CreatePost';
import './Style.css';

const App = () => {
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <>
    <BrowserRouter>
    <div className="bg-dark text-light min-vh-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home currentPost={currentPost} setCurrentPost={setCurrentPost} />} />
        <Route path="/create" element={<CreatePost currentPost={currentPost} setCurrentPost={setCurrentPost} />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
