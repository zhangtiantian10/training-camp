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
                        {
                            this.props.keyArr.map((key,index)=>{
                                return <td key={index}>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    <td key={index}>{key}</td>
                                    </td>


                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.allTotalScore.map((ele, index)=> {
                            return <tr>
                                    {
                                        this.props.keyArr.map((key,index)=>{
                                            return <td key={index}>
                                                    <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                <td key={index}>{ele[key]}</td>
                                                </td>
                                        })
                                    }
                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}