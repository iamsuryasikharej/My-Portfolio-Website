import React from 'react'
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl'
function Contact() {
    return (
        <div className="contactPage-style">
            <Grid className="grid-style">
                <Cell col={6}>
                <h2 className="myname-style">Surya Sikha Rej</h2>
                <img src="https://cdn1.iconfinder.com/data/icons/man-profession-2/64/coder-job-hire-avatar-512.png" style={{height:"200px"}}></img>
                <h1> Hey There,
                Surya here. I am a fresh garduate looking for a role as a software developer.I am passionate coder and problem solver.I love learning new technologies and implementing them in projects. Please do check my git-hub.</h1>
                </Cell>
                <Cell col={6}><h2>Contact Me</h2>
                <hr></hr>
                <div className="list-style">
                    <List >
                            <ListItem>
                            <ListItemContent style={{fontSize:"25px" , fontFamily:'Anton'}}>
                            <i class="fas fa-phone-square-alt">     (+91) 7605855625</i></ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}><i class="fas fa-at">        iamssrofficial@gmail.com</i></ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}><i class="fas fa-map-marker-alt">            India</i></ListItemContent>
                            </ListItem>
                    </List>
                </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact
