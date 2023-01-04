import React , {Component} from "react";
import './index.css'

export default class Item extends Component {

    state = {mouseIn: false}

    handleMouse= (mouse) => {
        return () => {
            this.setState({mouseIn: mouse})
        }
    }

    handleCheck = (id) => {
        const {updateTodo} = this.props
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        const {deleteItem} = this.props
        if (window.confirm('Are you sure?')) {
            deleteItem(id)
        }
    }


    render() {
        const {mouseIn} = this.state;
        const {name, done, id} = this.props
        return (
            <li style={{backgroundColor: mouseIn ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display: mouseIn? 'block': 'none'}}>Delete</button>
            </li>
        )
    }
}