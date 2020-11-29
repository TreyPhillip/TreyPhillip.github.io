import React, { useState } from "react";
import { Route, HashRouter, Switch } from 'react-router-dom';
import './styles/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { FaBars } from 'react-icons/fa';

// const handleToggleSidebar = (value) => {
//   setToggled(!toggled);
//   setCollapsed(!collapsed);
// }

export default function App() {
  const [toggled, setToggled] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebarMobile = (value) => {
    setToggled(!value);
    setCollapsed(toggled);
  }

  document.title = 'Trey Phillip | Junior Developer';

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={`app ${toggled ? 'toggled' : ''}`}>        
          <Sidebar
            toggled={toggled}
            collapsed={collapsed}
            handleToggleSidebar={handleToggleSidebarMobile}
          /> 
          <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebarMobile(toggled)}>
              <FaBars />
            </div>          
            <Switch>     
                <Route path="/Home" component={Home}/>
                <Route exact path="/" component={Home} />
                <Route path="/Projects" component={Projects} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
            </Switch>
          </main>
      </div>
    </HashRouter>
  );
}