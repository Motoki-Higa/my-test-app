import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Snippets = () => {
  return (
    <div>
      <h1>Snippets</h1>

      <nav>
        <li><Link to='asyncunittest'>Async Unit Test</Link></li>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
};

export default Snippets;