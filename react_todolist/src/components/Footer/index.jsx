import React , {Component} from "react";
import './index.css'

export default class Footer extends Component {

    render() {
        const {todos, changeAllItems, clearFinishedItems} = this.props
        const totalNum = todos.length
        const finishedNum = todos.reduce((acc, todo)=> acc + (todo.done === true ? 1:0),0 )
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={(event) => changeAllItems(event.target.checked)} checked={totalNum === finishedNum && totalNum !== 0 }/>
                </label>
                <span>
                    <span>Finished {finishedNum}</span> / total {totalNum}
                </span>
                <button className="btn btn-danger" onClick={clearFinishedItems}>Clear finished tasks</button>
            </div>
        )
    }
}