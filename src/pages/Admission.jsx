import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', course: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'admissions'), formData);
      setStatus('Application submitted successfully!');
      setFormData({ name: '', email: '', course: '' });
    } catch (error) {
      console.error(error);
      setStatus('Submission failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Online Admission</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name"
          value={formData.name} onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-700" />

        <input type="email" name="email" placeholder="Email"
          value={formData.email} onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-700" />

        <input type="text" name="course" placeholder="Interested Course"
          value={formData.course} onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-700" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Application
        </button>
        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}
