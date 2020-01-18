import React, { Component } from 'react'
import {Tab , Tabs, Card,CardText,CardActions,Button,CardTitle,CardMenu,IconButton} from 'react-mdl'
export class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }
    toRender()
    {
        if(this.state.activeTab==0){
            return( 
            <Card shadow={100} style={{ width: '512px', margin: 'auto', }}>
                    <CardTitle style={{ color: 'wheat', height: '176px', background: 'url(https://www.oracle.com/a/ocom/img/hp11-intl-java-logo.jpg) center / cover' }}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                 </CardText>
                <CardActions border>
                        <Button colored><a href="https://github.com/iamsuryasikharej/React-App-demo" target="_blank">Get Started</a></Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>)
        }
        if (this.state.activeTab == 1) {
            return (
                <Card shadow={10} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: 'wheat', height: '176px', background: 'url("https://mindorks.s3.ap-south-1.amazonaws.com/courses/ds-algo-course-card.jpg") center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                 </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/iamsuryasikharej/React-App-demo" target="_blank">Get Started</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>)
        }
        if (this.state.activeTab == 2)
        {
            return (
                <Card shadow={10} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: 'wheat', height: '176px', background: 'url(https://onlineitguru.com/wp-content/uploads/2019/09/J2EE.png) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                 </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/iamsuryasikharej/React-App-demo" target="_blank">Get Started</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>)

        }
        if (this.state.activeTab == 3) {return(
            <Card shadow={10} style={{ width: '512px', margin: 'auto' }}>
                <CardTitle style={{ color: 'wheat', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                 </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/iamsuryasikharej/React-App-demo" target="_blank">Get Started</a></Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>)

        }
    }

    render() {
      
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ color: 'white' }}>java</Tab>
                    <Tab style={{color:'white'}}>DS & Algo</Tab>
                    <Tab style={{ color: 'white' }}>J2EE</Tab>
                    <Tab style={{ color: 'white' }}>React js</Tab>
                </Tabs>
                <section className='projects-grid'>
                    <div>{this.toRender()}</div>
                </section>
            </div>       
        )
    }
}

export default Projects
