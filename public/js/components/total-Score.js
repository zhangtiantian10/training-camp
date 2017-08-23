import React from 'react';
import Nav from '../containers/nav';

export default class TotalScore extends React.Component{
    componentWillMount(){
        this.props.getAllScore();
    }

    render(){
        return <div>
            <Nav/>
        </div>
    }
}