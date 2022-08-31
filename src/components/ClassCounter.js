import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h5>Class Counter</h5>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter