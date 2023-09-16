import React from 'react';
import './App.css';
import './scss/app.scss';

function App() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="search-block">
          <div>
            <button className="search-btn"></button>
            <div>
              <button className="filter-btn"></button>
              <button className="add-btn"></button>
            </div>
          </div>
        </div>
        <div className="profile-block"></div>
        <div className="client-block"></div>
        <div className="client-info-block"></div>
      </div>
    </div>
  );
}

export default App;
