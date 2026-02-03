import React, { useEffect, useState } from 'react';
import ProfileManager from './components/ProfileManager.jsx';
import LessonTemplates from './components/LessonTemplates.jsx';
import MultimediaTools from './components/MultimediaTools.jsx';
import FocusMode from './components/FocusMode.jsx';
import './styles.css';

export default function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  useEffect(() => {
    if (window.edubrowser?.ping) {
      window.edubrowser.ping().then((res) => console.log('IPC ping response:', res));
    }
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>EduBrowser</h1>
      </header>
      <main className="main-grid">
        <aside className="sidebar">
          <ProfileManager activeProfile={activeProfile} onSelect={setActiveProfile} />
          <FocusMode />
        </aside>
        <section className="content">
          <LessonTemplates activeProfile={activeProfile} />
          <MultimediaTools />
        </section>
      </main>
      <footer className="app-footer">EduBrowser — built for learning and focus</footer>
    </div>
  );
}
