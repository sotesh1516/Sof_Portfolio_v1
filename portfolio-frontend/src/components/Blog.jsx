import React from 'react';

function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      {/* Navbar */}
      <nav className="w-full max-w-4xl flex justify-end space-x-6 text-sm text-gray-700">
        <a href="/" className="hover:underline">home</a>
        <a href="/projects" className="hover:underline">projects</a>
        <a href="/blog" className="font-semibold underline">blog</a>
      </nav>

      {/* Blog Content */}
      <main className="w-full max-w-2xl mt-20">
        <h1 className="text-2xl font-bold mb-8">Blog</h1>

        <div className="space-y-4">
          <div className="flex space-x-4 text-gray-600">
            <span className="w-32">April 9, 2024</span>
            <a href="#" className="hover:underline">
              Embracing Vim: The Unsung Hero of Code Editors
            </a>
          </div>
          <div className="flex space-x-4 text-gray-600">
            <span className="w-32">April 8, 2024</span>
            <a href="#" className="hover:underline">
              Spaces vs. Tabs: The Indentation Debate Continues
            </a>
          </div>
          <div className="flex space-x-4 text-gray-600">
            <span className="w-32">April 7, 2024</span>
            <a href="#" className="hover:underline">
              The Power of Static Typing in Programming
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 text-sm text-gray-500">
        <div className="flex space-x-6 justify-center">
          <a href="#" className="hover:underline">rss</a>
          <a href="#" className="hover:underline">linkedin</a>
          <a href="#" className="hover:underline">email</a>
        </div>
        <p className="mt-4">© 2024 MIT Licensed</p>
      </footer>
    </div>
  );
}

export default Blog;
