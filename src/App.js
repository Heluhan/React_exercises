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
    render() {
        const {todos} = this.state
        return (
          <div className="todo-container">
              <div className="todo-wrap">
                  <Header addItem={this.addItem}/>
                  <List todos={todos}/>
                  <Footer/>
              </div>
          </div>
      );
    }
}

export default App;
