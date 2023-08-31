import { useState } from 'react'

import Componente1 from './components/Contador'
import OverviewComponent from './components/Overview'
import CreateComponent from './components/Create'
import ContentComponent from './components/Content'
import 'bootstrap'


              

// app.jsx


function App() {
  const [currentView, setCurrentView] = useState('OVERVIEW'); // Estado para rastrear la vista actual
  

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-secondary ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <button type="button" className="btn btn-secondary" onClick={() => handleViewChange('OVERVIEW')}>Overview</button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-secondary" onClick={() => handleViewChange('CONTENT')}>Content</button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-secondary" onClick={() => handleViewChange('CREATE')}>Create</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    {/*Cambio de vistas*/ }
    {currentView === 'OVERVIEW' && <OverviewComponent />}
    {currentView === 'CONTENT' && <ContentComponent />}
    {currentView === 'CREATE' && <CreateComponent />}
  </>
);
};






export default App
