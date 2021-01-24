import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from '../src/routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
