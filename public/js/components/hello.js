import React from 'react';

export default class Hello extends React.Component {
    componentWillMount() {
        this.props.getHello();
    }

    render () {
        return <div>
            {this.props.content}
        </div>
    }
}