import React from 'react';
import Nav from '../containers/nav';

export default class TotalScore extends React.Component{
    componentWillMount(){
        this.props.getAllScore();
    }

    search(){
        let zone = $("#zone").val();
        console.log(zone)
        this.props.searchZone({zone});
    }

    render(){
        return <div>
            <Nav/>
            <div className="col-md-offset-5 tablePaddingTop">
                <div className="col-md-2">
                    <select className="form-control textStyle" id="zone">
                        <option value="001" className="textStyle">001战区</option>
                        <option value="002" className="textStyle">002战区</option>
                        <option value="003" className="textStyle">003战区</option>
                        <option value="004" className="textStyle">004战区</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.search.bind(this)}>
                        查找
                    </button>
                </div>
            </div>

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