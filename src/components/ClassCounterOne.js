import React, { Component } from 'react'

class ClassCounterOne extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <h5>ClassCounterOne by Class Component using mount and update</h5>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounterOne