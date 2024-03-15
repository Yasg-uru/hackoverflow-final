import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux toolkit/lawyer.js'; // Adjust the path accordingly

const PostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    articles: [
      {
        title: "",
        content: "",
        tags: []
      },
      {
        title: "",
        content: "",
        tags: []
      }
    ]
  });
  const dispatch = useDispatch();

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedArticles = [...formData.articles];
    updatedArticles[index] = { ...updatedArticles[index], [name]: value };
    const updatedFormData = { ...formData, articles: updatedArticles };
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(formData)); // Dispatching the createPost action with form data
    console.log(formData); // You can replace this with your API call to post the data
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">Name:</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2" 
        />
        <br />

        <label className="block">Description:</label>
        <textarea 
          value={formData.description} 
          onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
          className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2" 
        />
        <br />

        {formData.articles.map((article, index) => (
          <div key={index}>
            <label className="block">Title:</label>
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={(e) => handleChange(e, index)}
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
            <br />

            <label className="block">Content:</label>
            <textarea
              name="content"
              value={article.content}
              onChange={(e) => handleChange(e, index)}
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
            <br />

            <label className="block">Tags:</label>
            <input
              type="text"
              name="tags"
              value={article.tags.join(', ')}
              onChange={(e) => handleChange(e, index)}
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
            <br />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
