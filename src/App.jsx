import React, { useState } from 'react';
import './App.css';
import img from "./image.png";
import { 
  FiHome, FiCpu, FiFolder, FiMail, FiMapPin, FiUser,
  FiEye, FiUsers, FiTrendingUp, FiArrowRight, FiPlay, FiExternalLink,
  FiInstagram, FiGithub, FiFacebook
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

function App() {
  const [activeNav, setActiveNav] = useState('home');
  
  // Kontakt sahifasi uchun state'lar
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Xaritadagi tanlangan nuqta state'i
  const [selectedPoint, setSelectedPoint] = useState('tatu');

  const navItems = [
    { id: 'home', icon: <FiHome />, label: 'Asosiy' },
    { id: 'about', icon: <FiUser />, label: 'Men haqimda' },
    { id: 'skills', icon: <FiCpu />, label: 'Ko\'nikmalar' },
    { id: 'projects', icon: <FiFolder />, label: 'Loyihalar' },
    { id: 'contact', icon: <FiMail />, label: 'Aloqa' },
    { id: 'location', icon: <FiMapPin />, label: 'Manzil' },
  ];

  // 1-SAHIFA: HOME
const renderHome = () => (
  <div className="page-fade-in fade-container">
    <div className="hero-section">
      <span className="badge">FRONTEND DEVELOPER portfolio</span>
      <h1>
        I’m a Frontend Developer <br />
        <span className="purple-text">JONIBEK</span>
      </h1>
      <p className="description">
        I’m a Frontend Developer specializing in creating modern websites, focusing on UI/UX, design, and full functionality, including SSL, domains, hosting, and SEO.
      </p>
      <div className="cta-buttons">
        <button className="btn-primary" onClick={() => setActiveNav('contact')}>
          Apply Now <FiArrowRight />
        </button>
        <button className="btn-secondary">
          Watch the Video <FiPlay className="play-icon" />
        </button>
      </div>
    </div>

    {/* Statistika o'rniga premium rasm bloki */}
    <div className="hero-image-container">
      <div className="image-glow-effect"></div>
      <img 
        src={img} // Bu yerga o'zingizni rasmingiz linkini qo'yasiz (masalan: /images/jonibek.jpg)
        alt="Jonibek - Frontend Developer" 
        className="hero-profile-img"
      />
    </div>
  </div>
);

  // 2-SAHIFA: ABOUT ME
  const renderAbout = () => (
    <div className="page-fade-in about-page-container">
      <h2 className="about-cyber-title">ABOUT ME</h2>
      
      <div className="about-content-wrapper">
        <div className="about-avatar-frame">
          <img 
            src={img}
            alt="Profile" 
            className="about-image"
          />
        </div>

        <div className="about-text-details">
          <p className="about-description">
            Hi, I'm a passionate Front-End Developer who enjoys building modern, responsive, 
            and creative websites. I work mainly with HTML, CSS, JavaScript, and React to take 
            my skills to the next level. I love clean design, smooth animations, and writing code 
            that turns ideas into real digital experiences. My goal is to keep improving every day 
            and create projects that make an impact.
          </p>

         <div className="about-social-circles">
  {/* Telegram - 1-rasm: @dasturmash */}
  <a href="https://t.me/dasturmash" target="_blank" rel="noopener noreferrer" className="social-ring" title="Telegram">
    <FaTelegramPlane />
  </a>

  {/* Instagram - 2-rasm: jonibek_js_ */}
  <a href="https://instagram.com/jonibek_js_" target="_blank" rel="noopener noreferrer" className="social-ring" title="Instagram">
    <FiInstagram />
  </a>

  {/* GitHub - 3 va 4-rasm: jonibek20100 */}
  <a href="https://github.com/jonibek20100" target="_blank" rel="noopener noreferrer" className="social-ring" title="GitHub">
    <FiGithub />
  </a>

  {/* Vercel - GitHub nomingiz asosida sozlindi */}
  <a href="https://vercel.com/jonibek20100" target="_blank" rel="noopener noreferrer" className="social-ring" title="Vercel">
    <SiVercel />
  </a>

  {/* Facebook - Profilingizga moslashtirildi */}
  <a href="https://facebook.com/jonibek20100" target="_blank" rel="noopener noreferrer" className="social-ring" title="Facebook">
    <FiFacebook />
  </a>
</div>

          <button className="view-projects-btn" onClick={() => setActiveNav('projects')}>
            VIEW MY PROJECTS
          </button>
        </div>
      </div>
    </div>
  );

  // 3-SAHIFA: SKILLS
  const renderSkills = () => (
    <div className="page-fade-in skills-page">
      <div className="skills-left">
        <div className="robot-hand-container">
          <div className="cyber-hand">🦾</div>
          <div className="floating-tech tech-react">React</div>
          <div className="floating-tech tech-tailwind">CSS</div>
          <div className="floating-tech tech-python">HTML</div>
          <div className="floating-tech tech-vite">JS</div>
        </div>
      </div>

      <div className="skills-right">
        <h2>My Skills</h2>
        <p className="skills-desc">
          I'm a passionate web developer with experience creating modern, responsive web applications.
          I specialize in frontend development using cutting-edge technologies.
        </p>
        
        <div className="skills-bars">
          {[
            { name: 'React', level: '90%' },
            { name: 'CSS', level: '85%' },
            { name: 'HTML', level: '80%' },
            { name: 'JS', level: '95%' }
          ].map((skill, index) => (
            <div key={index} className="skill-progress-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 4-SAHIFA: PROJECTS
  const renderProjects = () => (
    <div className="page-fade-in projects-page">
      <div className="projects-header">
        <h2>Mening Loyihalarim va Dasturlarim</h2>
       
      </div>
      
      <div className="phone-grid">
        {[
          { title: 'Amaliyot Sinov', link: 'https://amalyot-sinov.vercel.app', bg: 'mosque-bg', desc: 'Sinov va UI Eksperimentlari' },
          { title: 'Two Sigma Restoran', link: 'https://restoran-two-sigma.vercel.app', bg: 'login-bg', desc: 'Premium Restoran Buyurtma Tizimi' },
          { title: 'Dori Mu', link: 'https://dori-mu.vercel.app', bg: 'portfolio-bg', desc: 'Tibbiyot va Dorixona Platformasi' },
          { title: 'Omega Dashboard', link: 'https://dashboard-omega-ten-24.vercel.app', bg: 'study-bg', desc: 'Kengaytirilgan Analitika Paneli' }
        ].map((phone, i) => (
          <div key={i} className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-header-notch"></div>
              <div className={`phone-content ${phone.bg}`}>
                <div className="phone-badge">PROLOJINIYA {i+1}</div>
                <h4>{phone.title}</h4>
                <p>{phone.desc}</p>
                <a href={phone.link} target="_blank" rel="noopener noreferrer" className="phone-link-btn">
                  Ko'rish <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tools-footer-panel">
        <div className="arrow-indicator">
          <span className="arrow-head">&rarr;</span>
        </div>
        <div className="tool-icons-container">
          <div className="tool-circle" title="Pixellab">P</div>
          <div className="tool-circle capcut-icon" title="CapCut"><span className="cc-shape"></span></div>
          <div className="tool-circle alight-icon" title="Alight Motion">🌀</div>
          <div className="tool-circle canva-icon" title="Canva">Canva</div>
          <div className="tool-circle ibis-icon" title="ibisPaint X">ip</div>
          <div className="tool-circle pinterest-icon" title="Pinterest">P</div>
        </div>
      </div>
    </div>
  );

  // 5-SAHIFA: CONTACT
  const renderContact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };

    return (
      <div className="page-fade-in contact-page">
        <h2>Men bilan bog'lanish</h2>
        
        {!isSubmitted ? (
          <>
            <p className="contact-subtitle">Loyihangiz yoki taklifingiz bo'lsa, ma'lumotlarni qoldiring.</p>
            <form className="cyber-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Ismingiz</label>
                <input 
                  type="text" 
                  placeholder="Ismingizni kiriting" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
              <div className="input-group">
                <label>Email Manzilingiz</label>
                <input 
                  type="email" 
                  placeholder="example@gmail.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
              <div className="input-group">
                <label>Xabaringiz</label>
                <textarea 
                  rows="5" 
                  placeholder="Loyihangiz haqida batafsil yozing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Ma'lumotlarni yuborish</button>
            </form>
          </>
        ) : (
          <div className="success-cyber-card page-fade-in">
            <div className="success-icon">✓</div>
            <h3>Rahmat, <span className="user-name-highlight">{formData.name}</span>!</h3>
            <p>Barcha ma'lumotlaringiz muvaffaqiyatli qabul qilindi.</p>
            <div className="status-box">
              <span className="pulse-cyan"></span> Tizim tasdiqladi: Tez orada o'zim siz bilan aloqaga chiqaman!
            </div>
            <button 
              className="btn-secondary min-btn" 
              onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
            >
              Yangi xabar qoldirish
            </button>
          </div>
        )}
      </div>
    );
  };

  // 6-SAHIFA: LOCATION (YANGILANGAN: O'zbekiston, Samarqand, TATU xaritasi)
  const renderLocation = () => {
    // Tanlangan joyga qarab ma'lumotlar o'zgarishi uchun obyekt
    const pointsData = {
      uzb: {
        title: "O'zbekiston Respublikasi",
        sub: "Markaziy Osiyodagi Vatanimiz",
        desc: "Yurak qismida joylashgan yirik texnologik va IT rivojlanish markazlaridan biri.",
        status: "Mamlakat kodi: +998"
      },
      sam: {
        title: "Samarqand Viloyati",
        sub: "Tarixiy va Madaniy Shahar",
        desc: "Azim va ko'hna shahar, barcha asosiy sayyohlik hamda innovatsiyalar chorrahasi.",
        status: "Viloyat kodi: 22"
      },
      tatu: {
        title: "TATU Samarqand Filiali",
        sub: "Muhammad al-Xorazmiy nomidagi TATUSF",
        desc: "Men tahsil olayotgan / faoliyat yuritayotgan zamonaviy axborot texnologiyalari universiteti.",
        status: "IT va Dasturlash markazi"
      }
    };

    return (
      <div className="page-fade-in location-page">
        <h2>Geolokatsiya va Manzil</h2>
        
        <div className="map-dashboard-layout">
          {/* Chap tomonda vizual interaktiv minimalist xarita */}
          <div className="custom-map-container">
            <div className="map-frame">
              {/* O'zbekiston chegarasi o'rnida katta kontur */}
              <div className="map-country-layer">UZBEKISTAN</div>
              
              {/* Samarqand viloyati hududi */}
              <div className={`map-region-layer ${selectedPoint === 'sam' ? 'active-region' : ''}`} onClick={() => setSelectedPoint('sam')}>
                <span>SAMARQAND</span>
              </div>

              {/* Xaritadagi pin nuqtalar */}
              <div 
                className={`map-pin-point pin-uzb ${selectedPoint === 'uzb' ? 'pulse-pin' : ''}`} 
                onClick={() => setSelectedPoint('uzb')}
                title="O'zbekiston"
              >
                🇺🇿
              </div>

              <div 
                className={`map-pin-point pin-samarqand ${selectedPoint === 'sam' ? 'pulse-pin' : ''}`} 
                onClick={() => setSelectedPoint('sam')}
                title="Samarqand shahri"
              >
                📍
              </div>

              <div 
                className={`map-pin-point pin-tatu ${selectedPoint === 'tatu' ? 'pulse-pin' : ''}`} 
                onClick={() => setSelectedPoint('tatu')}
                title="TATU Samarqand Filiali"
              >
                🏢 <span className="tatu-mini-tag">TATU SF</span>
              </div>
            </div>

            {/* Pastki tezkor boshqaruv tugmachalari */}
            <div className="map-switchers">
              <button className={selectedPoint === 'uzb' ? 'active' : ''} onClick={() => setSelectedPoint('uzb')}>O'zbekiston</button>
              <button className={selectedPoint === 'sam' ? 'active' : ''} onClick={() => setSelectedPoint('sam')}>Samarqand</button>
              <button className={selectedPoint === 'tatu' ? 'active' : ''} onClick={() => setSelectedPoint('tatu')}>TATU SF</button>
            </div>
          </div>

          {/* O'ng tomonda tanlangan nuqtaning batafsil tavsif paneli */}
          <div className="map-details-sidebar">
            <div className="cyber-glass-info">
              <span className="location-badge-top">MANZIL DETALLARI</span>
              <h3>{pointsData[selectedPoint].title}</h3>
              <h4 className="purple-text">{pointsData[selectedPoint].sub}</h4>
              <p className="location-desc">{pointsData[selectedPoint].desc}</p>
              
              <div className="location-meta-footer">
                <span className="pulse-cyan-dot"></span>
                <span>{pointsData[selectedPoint].status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <nav className="vertical-header">
        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {activeNav === 'home' && renderHome()}
        {activeNav === 'about' && renderAbout()}
        {activeNav === 'skills' && renderSkills()}
        {activeNav === 'projects' && renderProjects()}
        {activeNav === 'contact' && renderContact()}
        {activeNav === 'location' && renderLocation()}
      </main>
    </div>
  );
}

export default App;