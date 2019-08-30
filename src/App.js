import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
