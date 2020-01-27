import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import picture from '../assets/my-avataar-pic-for-resume-page.png'
import Education from "./Education"
export class Resume extends Component {
    render() {
        return (
            <div className="resume-style" >
                <Grid className="grid1-style" >
                    <Cell col={4} className="cell1-style">
                        <img src={picture} className="resume-picture-style"></img>
                        <div className="resume-div-style">
                            <h1 className="myname-resume-style">Surya Sikha Rej</h1>
                            <h className="programmer-style">Programmer</h>
                            <br></br>
                            <div className="about-me-resume-style">

                                <h>Hey There,<br></br>Surya here. I am a fresh garduate looking for a role as a software developer. I am passionate coder and problem solver. I love learning new technologies and implementing them in projects.</h>
                            
                            <hr style={{ border:"1px  solid  #ad5389" , width:"50%"}}></hr>
                            <h5 style={{fontWeight:"bolder"}}>Address</h5>
                            <p>India</p>
                            <hr style={{ border: "1px  solid  #ad5389", width: "50%" }}></hr>
                            <h5 style={{ fontWeight: "bolder" }}>Website</h5>
                            <p><a style={{color:"black"}}>www.devsurya.com</a></p>
                            <hr style={{ border: "1px  solid  #ad5389", width: "50%" }}></hr>
                            <h5 style={{ fontWeight: "bolder" }}>Contact</h5>
                            <p><a style={{ color:"black" }}>iamssrofficial@gmail.com</a></p>
                            <p style={{fontWeight:"bolder"}}>+91 7605855625</p>
                            </div>
                        </div>
                    </Cell> 
                    
                    
                    <Cell col={8} className="cell2-style">
                        <div className="cell2-resume-div-style">
                            <h1 className="edu-style">E d u c a t i o n</h1>
                            <Education startYear="2015" endYear="2019" course="B.Tech ECE" school="Narula Institute of Technology" dgpa="7.66" highSchoolStarty="2012" highSchoolEndy="2015" courseISC="ISC" schoolISC="East West Model School" percentageIsc="70 %" ICSESchoolEndy="2012" percentageICSE="83.5" courseISCE="ICSE" schoolISCE="East West Model School"></Education>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
        
export default Resume
