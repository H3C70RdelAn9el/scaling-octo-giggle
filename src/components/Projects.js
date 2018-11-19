import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl';

export class Projects extends Component {
  constructor(props) {
    super(props);
      this.state = {
        activeTab: 0
      };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
          <div className="projects-grid">
         {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
          <CardTitle style={{color: '#010000', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nobis! Placeat aspernatur tenetur nesciunt magnam?
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}} >
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 2  */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
          <CardTitle style={{color: '#010000', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nobis! Placeat aspernatur tenetur nesciunt magnam?
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}} >
            <IconButton name="share" />
          </CardMenu>
        </Card>

        
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
          <CardTitle style={{color: '#010000', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nobis! Placeat aspernatur tenetur nesciunt magnam?
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}} >
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
      <div>
        <h1>Wordpress</h1>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
      <div>
        <h1>Rails</h1>
      </div>
      )
    } 
  }



  render() {
    return (
      <div>
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Wordpress</Tab>
          <Tab>Rails</Tab>
        </Tabs>
        </div>
        <div className="projects">
          <Grid>
            <Cell col={12}>
              <div className="projects-content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>          
       
      </div>
      </div>
    )
  }
}

export default Projects;
