import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Portfolio />
      </header>
    </div>
  );
};

export default App;