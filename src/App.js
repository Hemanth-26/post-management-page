import React, { useState } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Header from './Header';

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <section className="vh-100 gradient-custom">
      <div className='container-fluid p-0'>
        <header>
          <Header searchInput={searchInput} onChangeSearch={setSearchInput} />
        </header>
        <CardContainer searchInput={searchInput || localStorage.getItem("searchInput")} />
      </div>
    </section>
  );
}

export default App;
