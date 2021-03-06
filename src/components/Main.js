import React from 'react'
import Landingpage from './Landingpage'
import Resume from './Resume'
import Contact from './Contact';
import Projects from './Projects'
import Aboutme from './Aboutme'
import { Route,Switch } from 'react-router-dom'
import { Particles } from 'react-particles-js'

const Main=()=> (<Switch >

    <Route exact path="/" component={Landingpage}></Route>
    <Route  path="/resume" component={Resume}></Route>
    <Route  path="/contact" component={Contact}></Route>
    <Route  path="/project" component={Projects}></Route>
    
  
    </Switch>)
export default Main