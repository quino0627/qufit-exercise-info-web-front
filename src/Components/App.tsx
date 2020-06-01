import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes isLoggedIn />
    </BrowserRouter>
  );
};

export default App;
