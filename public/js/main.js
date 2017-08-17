import React from 'react';
import {render} from "react-dom";

class Hello extends React.Component {
    render () {
        return <div>
            hello
        </div>
    }
}

render(<Hello/>, document.getElementById("content"));