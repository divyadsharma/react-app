import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    console.log(this.props);
    if(this.props.projects){
      projectItems =  this.props.projects.map(project => {
        console.log(project);
        return(
          <ProjectItem key={project.title} project={project}/>
        );
      });
    }
    return (
      <div className="Projects">
        My Projects
        {projectItems}
      <div className="test">
        {this.props.test}
      </div>
      </div>
    );
  }
}

export default Projects;
