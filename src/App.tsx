import React from 'react';
import './index.css';
import Header from './components/Header';
import Layout from './components/Layout';


const App: React.FC = () => {
  return (
    <div>
      <Header />
     <Layout />
    </div>
  );
};

export default App;