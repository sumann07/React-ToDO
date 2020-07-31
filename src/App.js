import React from "react";
import "./styles.css";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [],
    changeVal: "",
    currentItem: [],
    isfilter: false
  };

  addTodoToState = text => {
    const newTodos = this.state.todos.concat({
      text: text
    });
    this.setState({
      todos: newTodos,
      isfilter: false,
      currentItem: [],
      changeVal: ""
    });
  };
  deleteTodoFromStates = value => {
    console.log(value);
    const filterArr1 = this.state.todos.filter(val => {
      return val.text !== value;
    });
    const filterArr2 = this.state.currentItem.filter(val => {
      return val.text !== value;
    });
    this.setState({
      todos: filterArr1,
      currentItem: filterArr2
    });
  };
  deleteTodoFromState = index => {
    const newTodos = this.state.todos.filter((todo, i) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };
  edit = (value, index) => {
    // console.log(value, index);
    const items = this.state.todos;
    items[index].text = value;
    this.setState({
      todos: items
    });
  };
  search = e => {
    const todos = this.state.todos;
    const filterItem = todos.filter(val => {
      return val.text === this.state.changeVal;
    });
    this.setState({
      currentItem: filterItem,
      isfilter: true
    });
  };
  render() {
    return (
      <>
        <div className="App">
          
          <div className="search">
          <div id="div">ToDo App</div>
            <input
              type="text"
              placeholder="search..."
              value={this.state.changeVal}
              onChange={e => {
                this.setState({
                  changeVal: e.target.value
                });
              }}
            />
            <button onClick={this.search}>Search</button>
          </div>
          <AddTodo addTodoToState={this.addTodoToState} />
          {this.state.currentItem.map((val, index) => {
            return (
              <li className="app-list1"  style={{listStyleType:"none"}} key={index}>
                {val.text}{" "}
                <span>
                  <button
                    onClick={() => {
                      this.deleteTodoFromStates(val.text);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
          {!this.state.isfilter &&
            this.state.todos.map((todos, index) => {
              return (
                <li className='app-list' style={{listStyleType:"none"}} key={index}>
                  {/* {todos.text} */}

                  <input
                    type="text"
                    id={index}
                    value={todos.text}
                    onChange={e => {
                      this.edit(e.target.value, index);
                    }}
                  />

                  <span>
                    <button
                      onClick={() => {
                        this.deleteTodoFromState(index);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              );
            })}

         
        </div>
      </>
    );
  }
}
export default App;
