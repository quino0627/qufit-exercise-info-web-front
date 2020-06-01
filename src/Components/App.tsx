import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Routes from './Routes';
import Header from './Header';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content className="content">
        <Routes isLoggedIn={false} />
      </Content>
      <Footer className="footer">AllNewFit</Footer>
    </BrowserRouter>
  );
};

export default App;
