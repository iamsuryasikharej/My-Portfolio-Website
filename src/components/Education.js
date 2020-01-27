import React, { Component } from 'react'
import { Cell,Grid } from 'react-mdl'

export class Education extends Component {
    render() {
        return (
            <div className="edu-classcom-style">
                <Grid>
                   <Cell col={4}>
                    <hr style={{ border: "2px solid auto 50%" }}></hr>
                   <div className="divdiv1">
                   
                   {this.props.startYear}-{this.props.endYear}<br/><br/>
                    DGPA-{this.props.dgpa}
                    <hr style={{ border: "2px solid auto 50%" }}></hr>
                    {this.props.highSchoolEndy}<br/><br/>
                    Percentage-{this.props.percentageIsc}
                    <hr style={{ border: "2px solid auto 50%" }}></hr>
                    {this.props.ICSESchoolEndy}<br /><br />
                    Percentage-{this.props.percentageICSE}
                    </div>
                    
                   </Cell>
                    <Cell col={8}> 
                        <hr style={{ border: "2px solid auto 50%" }}></hr>
                        <div className="divdiv1">
                            {this.props.course}<br/><br/>
                            <a style={{color:"snow"}}>{this.props.school}</a><br/>
                            <hr style={{ border: "2px solid auto 50%" }}></hr>
                            {this.props.courseISC}<br /><br />
                            <a style={{ color: "snow" }}>{this.props.schoolISC}</a>
                            <hr style={{ border: "2px solid auto 50%" }}></hr>
                            {this.props.courseISCE}<br /><br />
                            <a style={{ color: "snow" }}>{this.props.schoolISCE}</a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education
