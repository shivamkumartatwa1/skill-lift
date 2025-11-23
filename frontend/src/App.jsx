import React, { useEffect, useState } from 'react';
import SkillCard from './components/SkillCard';

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/skills')
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  return (
    <div className="app-container">
      <h1>Skill Lift - Featured Skills</h1>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default App;
