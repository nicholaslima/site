import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from '../src/routes';
import GlobalSTyle from './global/style';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes></Routes>
      </BrowserRouter>
      <GlobalSTyle></GlobalSTyle>
    </div>
  );
}

export default App;
