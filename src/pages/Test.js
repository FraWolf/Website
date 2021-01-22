import React, { Component } from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1 class="text-9xl text-white font-bold mx-auto max-w-6xl">
                    <span class="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-red-500">FraWolf,</span>
                </h1>
                <br />
                <h1 class="text-5xl text-white font-bold mx-auto max-w-6xl">
                    Junior Backend Developer.
                </h1>
            </div>
        );
    }
}

export default Test;