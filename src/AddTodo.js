import React from "react";
import './styles.css';

class AddTodo extends React.Component {
  state = {
    todotext: ""
  };

  changetodotext = event => {
    this.setState({
      todotext: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.addTodoToState(this.state.todotext);
    this.setState({
      todotext: ""
    });
  };
  render() {
    return (
      <>
        <div className="add-to-do">
          
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="Enter text..."
              onChange={this.changetodotext}
              value={this.state.todotext}
            />
            <button  type="submit">Add</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddTodo;
