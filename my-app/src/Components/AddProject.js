import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Development', 'Mobile Developmet']
  }

  handleSubmit(e){
    if(this.refs.title.value === ""){
      alert("Title is required");
    }
    else {
      console.log(this.refs.title.value)
      console.log(this.refs.category.value)
      console.log(this.refs)
      this.setState = ({ newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(newProject);
      });
    }
    e.preventDefault()
  }

  render() {
    console.log("hi",this.state);
    let catergoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option> 
    })
    return (
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
              {catergoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
