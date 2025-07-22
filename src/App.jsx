import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Blogs from './pages/Blogs';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageBlogs from './pages/admin/ManageBlogs';
import ManageAdmissions from './pages/admin/ManageAdmissions';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';


export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <Router>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50"
      >
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/blogs" className="hover:text-yellow-400 transition">Blogs</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          <Link to="/admission" className="hover:text-yellow-400 transition">Admission</Link>
        </div>
        <button onClick={() => setDark(!dark)} className="bg-yellow-400 text-black px-3 py-1 rounded">
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </motion.nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />


        // Admin Routes
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin" element={
  <ProtectedRoute>
    <AdminLayout />
  </ProtectedRoute>
}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="blogs" element={<ManageBlogs />} />
  <Route path="admissions" element={<ManageAdmissions />} />
</Route>
      </Routes>
    </Router>
  );
}