import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Nutrition Tracker App",
      description: "A MERN app for logging meals and tracking nutrition.",
      link: "#"
    },
    {
      title: "Insenti (Sentiment Survey App)",
      description: "A survey web app for sentiment analysis.",
      link: "#"
    },
    {
      title: "StudentStash",
      description: "A marketplace for students to sell items and build personal brands.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      {/* Navbar */}
      <nav className="w-full max-w-4xl flex justify-end space-x-6 text-sm text-gray-700">
        <a href="/" className="hover:underline">home</a>
        <a href="/projects" className="font-semibold underline">projects</a>
        <a href="/blog" className="hover:underline">blog</a>
      </nav>

      {/* Projects Content */}
      <main className="w-full max-w-2xl mt-20">
        <h1 className="text-2xl font-bold mb-8">Projects</h1>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex space-x-4 text-gray-600">
              <span className="w-32">{project.title}</span>
              <a href={project.link} className="hover:underline">
                {project.description}
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 text-sm text-gray-500">
        <div className="flex space-x-6 justify-center">
          <a href="#" className="hover:underline">linkedin</a>
          <a href="#" className="hover:underline">email</a>
          <a href="#" className="hover:underline">resume</a>
        </div>
        <p className="mt-4">© 2024 MIT Licensed</p>
      </footer>
    </div>
  );
}

export default Projects;
