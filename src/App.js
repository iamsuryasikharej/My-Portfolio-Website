import React from 'react';

import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/Main';
import {Link} from 'react-router-dom';
import {Particles} from 'react-particles-js'
import Part from './components/Part';
import Landingpage from './components/Landingpage';
function App() {
 
 
  return (
    <div className="App"> 
  
      <Layout>
        
        <Header className='header-style' title={<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Surya Sikha Rej</Link>}>
          <Navigation className="nav-style">

            <Link to="/resume">Resume</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
            


          </Navigation>
        </Header>
        <Drawer title="About Me" style={{background:'balck'}} >
          <Navigation className='drawer-style'>
            <Link to="/resume" style={{ color: 'white'}}>Resume</Link>
            <Link to="/project" style={{ color: 'white' }}>Projects</Link>
            <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
          </Navigation>
        </Drawer>
        
        <Content>
        <Main></Main>
        </Content>
   
      </Layout>
      
     
      
        </div>)
   
      
      }
export default App;
