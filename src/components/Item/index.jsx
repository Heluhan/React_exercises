import React , {Component} from "react";
import './index.css'
export default class Item extends Component {

    state = {mouseIn: false}

    handleMouse= (mouse) => {
        return () => {
            this.setState({mouseIn: mouse})
        }
    }
    render() {
        const {mouseIn} = this.state;
        const {name, done} = this.props
        return (
            <li style={{backgroundColor: mouseIn ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouseIn? 'block': 'none'}}>Delete</button>
            </li>
        )
    }
}