import React from 'react';
import Home from './Home/home';

// Will be rendering the home page here as the default but am setting up the company logo as the header so that it is set on all lower level pages.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src=''
          alt='Co-Make Logo'
        />
      </header>
      <Home />
    </div>
  );
}

export default App;
