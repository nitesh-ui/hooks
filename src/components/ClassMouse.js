import React, { Component } from 'react'

class ClassMouse extends Component {

    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY});
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <div>
                <h5>ClassMouse to track mouse position</h5>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse