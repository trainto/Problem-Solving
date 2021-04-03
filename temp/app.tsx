import React from 'react';
import GlobalStore from './store/global';
import Routing from './components/common/routing';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <GlobalStore.Provider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </GlobalStore.Provider>
  );
};

export default App;
