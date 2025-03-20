import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">Portfolio</div>
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a Full Stack Developer passionate about creating amazing web experiences</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a dedicated developer with a passion for creating elegant solutions to complex problems. With experience in both front-end and back-end development, I strive to build applications that are both beautiful and functional.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: your.email@example.com</p>
            <p>Location: Your City, Country</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
