import React from 'react'
import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <>
          <Routes/>
          <GlobalStyle/>
          </>
      </header>
    </div>
  );
}

export default App;
