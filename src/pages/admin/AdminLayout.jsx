import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <NavLink to="/admin/dashboard" className="block hover:underline">Dashboard</NavLink>
          <NavLink to="/admin/blogs" className="block hover:underline">Manage Blogs</NavLink>
          <NavLink to="/admin/admissions" className="block hover:underline">Manage Admissions</NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
