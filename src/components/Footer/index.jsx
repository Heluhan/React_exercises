import React , {Component} from "react";
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>Finished 0</span> / total 2
                </span>
                <button className="btn btn-danger">Clear finished tasks</button>
            </div>
        )
    }
}