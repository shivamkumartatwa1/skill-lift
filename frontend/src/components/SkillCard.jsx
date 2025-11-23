import React from 'react';

export default function SkillCard({ thumbnail, title, tags, blurb }) {
  return (
    <div className="skill-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{tags.join(' • ')}</p>
      <p>{blurb}</p>
      <button>Learn More</button>
    </div>
  );
}
