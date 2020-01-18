import React from 'react'
import Particles from 'react-particles-js';

import { Grid, Cell } from 'react-mdl'
import picture from'../assets/46563058.jpg'
function Landingpage() {

   
    return (
      
        <div style={{width:'100%',margin:'auto'}}>
        
          

        <Grid className="body-style">
              
        <Cell col={12}>
                    <a className='img-style' href="https://www.instagram.com"><img className="avatar-style" src={picture}></img></a>   
                    
            <div className="banner-style">
                        
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>Java | Advanced Java | Javascript | DBMS | SQL</p>
                        
                        
            </div>
            
        </Cell>
                <div className="social-style">
                    <a href="https:/www.linkedin.com/in/suryasikharej" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/iamsuryasikharej" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://stackoverflow.com/users/10409341/i-am-ssr?tab=profile" target="_blank"><i class="fab fa-stack-overflow"></i></a>
                    <a href="https://www.hackerrank.com/iamssrofficial" target="_blank"><i class="fab fa-hackerrank"></i></a>



                </div>
                
        </Grid>
          
        
        </div>
    )
}

export default Landingpage
