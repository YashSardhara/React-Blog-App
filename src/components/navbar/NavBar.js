import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogForm from '../blog_components/BlogForm';
import BlogList from '../blog_components/BlogList';
import React, { useState } from 'react';
import Footer from '../footer/Footer';
import BlogMain from '../blog_components/BlogMain';

const NewsTopics = ["World", "U.S.", "Technology", "Design", "Culture", "Business", "Politics", "Opinion", "Science", "Health", "Style", "Travel"];

const NavBar = () => {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (newBlog) => {
        setBlogs([...blogs, newBlog]);
        // You can update the JSON file or send it to a server here
    };

    return (
        <>
            <Router>
                <nav>
                    <div className="container">
                        <header className="border-bottom lh-1 py-3">
                            <div className="row flex-nowrap justify-content-between align-items-center">
                                <div className="col-4 pt-1">
                                    <Link className="link-secondary" to="/create">Create Blog</Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link className="blog-header-logo text-body-emphasis text-decoration-none" to="/">Large</Link>
                                </div>
                                <div className="col-4 d-flex justify-content-end align-items-center">
                                    <a className="link-secondary" href="#" aria-label="Search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                                    </a>
                                    <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                                </div>
                            </div>
                        </header>

                        <div className="nav-scroller py-1 mb-3 border-bottom">
                            <nav className="nav nav-underline justify-content-between">
                                {NewsTopics.map((topic, index) => {
                                    return (<>
                                        <a key={index} className="nav-item nav-link link-body-emphasis" href="#">{topic}
                                        </a>
                                    </>)
                                })}
                            </nav>
                        </div>
                    </div>
                </nav>
                {/* set Browser Router */}
                <Routes>
                    <Route
                        path="/create"
                        element={<BlogForm addBlog={addBlog} />}
                    />
                    <Route
                        path="/"
                        element={<BlogList blogs={blogs} />}
                    />
                    <Route
                        path="/main"
                        element={<BlogMain blogs={blogs} />}
                    />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}

export default NavBar;