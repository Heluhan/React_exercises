import React , {Component} from "react";
import PropTypes from "prop-types";
import './index.css'
import {nanoid} from "nanoid";

export default class Header extends Component {

    static propTypes = {
        addItem: PropTypes.func.isRequired
    }
    handleInput = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('Do not add empty task')
            return
        }
        const newObj = {id: nanoid(), name: target.value, done:false}
        this.props.addItem(newObj)
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleInput} type="text" placeholder="Please Add an Item" name="item"/>
            </div>
        )
    }
}