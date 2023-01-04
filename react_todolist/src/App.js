import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';


class App extends Component{
    state = {todos:[
            {id:'001', name:'Coding', done:false},
            {id:'002', name:'Playing', done:false},
            {id:'003', name:'learning', done:false}
        ]}

    addItem = (todoObj) => {
        const newObj = [todoObj, ...this.state.todos]
        this.setState({todos: newObj})
    }

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, done: done}
            }
            else return todo
        })
        this.setState({todos: newTodos})
    }

    deleteItem = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter( (todo) => {
            return todo.id !== id
            }
        )
        this.setState({todos:newTodos})

    }

    changeAllItems = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            todo.done = done
            return todo
        })
        this.setState({todos:newTodos})
    }

    clearFinishedItems = () => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => !todo.done)
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
          <div className="todo-container">
              <div className="todo-wrap">
                  <Header addItem={this.addItem}/>
                  <List todos={todos} updateTodo={this.updateTodo} deleteItem={this.deleteItem}/>
                  <Footer todos={todos} changeAllItems={this.changeAllItems} clearFinishedItems={this.clearFinishedItems}/>
              </div>
          </div>
      );
    }
}

export default App;
