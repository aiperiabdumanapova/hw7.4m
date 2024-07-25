import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }

    render() {
        const { num } = this.state;
        const { setShow } = this.props;
        return (
            <div>
                <button onClick={() => setShow(false)}>hide</button>
                <h1>{num}</h1>
                <button onClick={() => {
                    if (num < 15) {
                        this.setState({ num: num + 1 });
                    } else {
                        this.setState({ num: 15 });
                    }
                }}>+1</button>
                <button onClick={() => {
                    if (num > 0) {
                        this.setState({ num: num - 1 });
                    } else {
                        this.setState({ num: 0 });
                    }
                }}>-1</button>
                <button onClick={() => {
                    if (num + 5 <= 15) {
                        this.setState({ num: num + 5 });
                    } else {
                        this.setState({ num: 15 });
                    }
                }}>+5</button>
                <button onClick={() => {
                    if (num - 5 >= 0) {
                        this.setState({ num: num - 5 });
                    } else {
                        this.setState({ num: 0 });
                    }
                }}>-5</button>
                <button onClick={() => this.setState({ num: 0 })}>reset</button>
            </div>
        );
    }
}

export default Counter;
