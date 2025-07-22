import { useState } from 'react';

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Welcome to Sheba EdTech', content: 'Our mission is to make learning easier.' },
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addBlog = () => {
    setBlogs([...blogs, { id: Date.now(), title, content }]);
    setTitle('');
    setContent('');
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Blogs</h2>
      <div className="space-y-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-2 border w-full rounded" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="p-2 border w-full rounded" rows={4}></textarea>
        <button onClick={addBlog} className="bg-blue-500 text-white px-4 py-2 rounded">Add Blog</button>
      </div>
      <div className="space-y-4">
        {blogs.map((b) => (
          <div key={b.id} className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold">{b.title}</h3>
            <p>{b.content}</p>
            <button onClick={() => deleteBlog(b.id)} className="text-red-600 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}