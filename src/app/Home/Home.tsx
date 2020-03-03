import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div>
    <h1>HomePage</h1>
    <p>
      Go to
      <Link to='/dashboard'>Dashboard</Link>
    </p>
  </div>
);

export default HomePage;
