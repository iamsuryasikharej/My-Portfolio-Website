import React from 'react';

import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/Main';
import {Link } from 'react-router-dom'
function App() {
  return (
    <div className="App"> 
      <div>
          <Layout>
          <Header className='header-style' title={<span><span>Surya Sikha Rej</span></span>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Drawer>
          <Content />
          
        </Layout>
      
      </div>
      <Main></Main>
      </div>
    
  );
}

export default App;
