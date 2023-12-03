import React, { useState } from 'react';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!title || !subtitle || !content || !author) {
      setError('All fields are mandatory');
      return;
    }

    // Check if content contains HTML
    const htmlRegex = /<[a-z][\s\S]*>/i;
    if (!htmlRegex.test(content)) {
      setError('Please enter content in HTML code');
      return;
    }

    const newBlog = {
      title,
      subtitle,
      content,
      author,
      timestamp: new Date().toLocaleString(),
    };

    addBlog(newBlog);

    // Clear the form fields after submitting
    setTitle('');
    setSubtitle('');
    setContent('');
    setAuthor('');
    setTimestamp('');
    setError('');
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Blog</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subtitle:</label>
          <input
            type="text"
            className="form-control"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content (HTML):</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;