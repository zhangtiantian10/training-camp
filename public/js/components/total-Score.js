import React from 'react';
import Nav from '../containers/nav';

export default class TotalScore extends React.Component{
    componentWillMount(){
        this.props.getAllScore();
    }

    render(){
        return <div>
            <Nav/>
            <div className="col-md-10 col-md-offset-1 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <td>ID</td>
                        <td>姓名</td>
                        <td>总成绩</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.allTotalScore.map((ele, index)=> {
                            return <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.total_score}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}