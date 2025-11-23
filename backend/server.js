const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const skills = [
  { id: 1, title: 'React Basics', tags: ['Beginner', '3h'], blurb: 'Learn core React concepts.', thumbnail: '/images/react.png' },
  { id: 2, title: 'Advanced CSS', tags: ['Intermediate', '4h'], blurb: 'Master responsive design.', thumbnail: '/images/css.png' },
];

const testimonials = [
  { id: 1, name: 'Jane Doe', role: 'Developer', quote: 'Skill Lift transformed my career!' },
  { id: 2, name: 'John Smith', role: 'Designer', quote: 'The best online learning platform.' },
];

app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/testimonials', (req, res) => res.json(testimonials));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
