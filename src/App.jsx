import personalAndClientProjects from './assets/data/personalAndClientProjects.json'
import workplaceProjects from './assets/data/workplaceProjects.json' 
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import OnlineCoursesDetail from "./OnlineCoursesDetail";
import './App.css'

function App() {

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
    {/* Project Image */}
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
    )}

    {/* Project Content */} 

    <div className="p-6">
      <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
      
      <p className="text-gray-700 mb-4">{project.desc}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
      {project.slug && (
        <Link to={`/${project.slug}`} className="text-blue-600 font-medium hover:underline">View Project →</Link>
      )}

    </div>
  </div>
);

  // Reusable project section
  const ProjectSection = ({ title, projects, bgColor="bg-blue-50" , showDisclaimer}) => (
    <section className= {` ${bgColor} py-12 px-6  mb-12`}>
    
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        {showDisclaimer && ( <p className="text-gray-500 text-sm mt-6">
    * The above projects were completed during my employment at Humber College.  
    All websites are the property of Humber College.
  </p>)}
        
      </div>
    </section>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element= {
 <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Harpreet Kaur</h1>
          <p className="text-lg">Web Developer</p>
        </div>
      </header>

      {/* About */}
      <section id="about" className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I’m Harpreet, a Web developer with 5 years of experience
          building responsive, user-friendly websites and eLearning solutions.
          I specialize in HTML, CSS, JavaScript, React, and accessibility.
        </p>
      </section>

      {/* Projects */}
    

      <ProjectSection title="Professional / Workplace Projects" projects={workplaceProjects} showDisclaimer={true}/>
      <ProjectSection title="Personal & Client Projects" projects={personalAndClientProjects} bgColor="bg-gray-100" showDisclaimer={false}/>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-12 px-6 -mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">
          Feel free to reach out if you’d like to work together!
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:harpreet8657@gmail.com"
            className="text-blue-600 hover:underline"
          >
            harpreet8657@gmail.com
          </a>
        </p>
        <p>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/harpreet-kaur-webdev"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          🖥{" "}
          <a
            href="https://github.com/HarpreetKaur01"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Harpreet Kaur</p>
      </footer>
    </div>
        }>

        </Route>
        <Route path='/online-course-builds' element={<OnlineCoursesDetail/>}>

        </Route>

      
      </Routes>
    </Router>


   
  );
}

export default App
