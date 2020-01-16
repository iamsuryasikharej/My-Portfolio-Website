import React from 'react';

import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/Main';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="Appa"> 
      <div>
          <Layout>
          <Header className='header-style' title={<Link to="/"  style={{color:'white',textDecoration:'none'}}>Surya Sikha Rej</Link>}>
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
          <Content>
            <Main ></Main>
          </Content>
          
         
        </Layout>
        
      </div>
      
      </div>
    
  );
}

export default App;
