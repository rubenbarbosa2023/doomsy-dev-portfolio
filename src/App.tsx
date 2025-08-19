import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="name">Rúben Barbosa</h1>
          <p className="subtitle">Doomsy dev</p>
          <p className="title">Backend Developer & Content Creator</p>
          <div className="description">
            <div className="description-content">
              Welcome to my land page! I am a passionate backend developer with a knack for creating efficient APIs in a professional environment. I would love to share my knowledge through content creation, including tutorials and tech talks.
              <br /><br />
              Explore my projects, connect with me on social media, and let's build something amazing together!
            </div>
          </div>
        </div>
      </header>

      {/* Social Links Section */}
      <section className="social-section">
        <div className="container">
          <h2>Connect with me</h2>
          <div className="social-links">
            <a 
              href="https://www.youtube.com/@DoomsyDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <span className="icon">📺</span>
              <span className="label">YouTube</span>
            </a>
            
            <a 
              href="https://github.com/rubenbarbosa2023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <span className="icon">🐙</span>
              <span className="label">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/rubenbarbosa2023/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <span className="icon">💼</span>
              <span className="label">LinkedIn</span>
            </a>
            
            <a 
              href="https://x.com/DoomsyDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <span className="icon">🐦</span>
              <span className="label">Twitter</span>
            </a>
            
            <a 
              href="mailto:ru.borgs@gmail.com" 
              className="social-link email"
            >
              <span className="icon">✉️</span>
              <span className="label">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Rúben Barbosa. Made with React & ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
