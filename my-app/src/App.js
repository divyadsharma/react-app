import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'web development'
      },
      {
        title: 'Social App',
        category: 'mobile development'
      },
      {
        title: 'Ecommerce shopping cart',
        category: 'web development'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
