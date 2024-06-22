import React from 'eact';
import './index.css';
import Header from './components/Header';
import Sectionlogin from './components/Sectionlogin';
import Layout from './components/Layout';


const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
     <Layout />
    </div>
  );
};

export default App;