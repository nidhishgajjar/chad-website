import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Body } from './components/landingpage/body';
import { NavPlusHeader } from './components/landingpage/nav+header';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <NavPlusHeader />
            <Body />
          </>
        } />
        {/* <Route path="/quicksearch" element={

        } /> */}
      </Routes>
    </div>
  );
};

export default App;
