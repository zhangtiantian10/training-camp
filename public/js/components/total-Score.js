import React from 'react';
import Nav from '../containers/nav';
import colSql from './colSql';

export default class TotalScore extends React.Component {
    componentWillMount() {
        this.props.getAllScore();
    }

    componentDidMount() {
        this.props.getAllZones();
        this.props.getAllWeeks();
    }

    selectTotalScore() {
        const zone = $('#zone').val();
        const week = $('#week').val();

        if (zone === '' && week === '') {
            this.props.getAllScore();
        } else {
            this.props.selectTotalScore({zone, week});
        }
    }

    render() {
        let thead = ['name'];

        this.props.keyArr.forEach(k => {
            if (k !== 'name' && k !== 'id' && k !== 'student_id' && k !== 'total_score' && k !== 'week_id') {
                thead.push(k);
            }
        });
        thead.push('total_score');
        return <div>
            <Nav/>
            <div className="col-md-offset-2 tablePaddingTop">
                <div className="col-md-3">
                    <select className="form-control textStyle" id="zone">
                        <option value="" className="textStyle">所有</option>
                        {this.props.zones.map((z, i) => {
                            return <option key={i} className="textStyle" value={z.name}>{z.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-3">
                    <select className="form-control textStyle" id="week">
                        <option value="" className="textStyle">所有</option>
                        {this.props.weeks.map((w, i) => {
                            return <option key={i} value={w.id} className="textStyle">
                                {w.week_code}
                            </option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle"
                            onClick={this.selectTotalScore.bind(this)}>
                        查找
                    </button>
                </div>
            </div>
            <div className="col-md-10 col-md-offset-1 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        {
                            thead.map((key, index)=> {
                                const find = colSql.find(c => key === c.sql);
                                if (find) {
                                    key = find.display;
                                }
                                if (key === 'name') {
                                    key = '姓名';
                                } else if (key === 'total_score') {
                                    key = '总成绩';
                                }
                                return <th className="textStyle col-md-1" key={index}>{key}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.allTotalScore.map((ele, i)=> {
                            return <tr key={i}>
                                {
                                    thead.map((key, index)=> {
                                        return <td className="textStyle" key={index}>{ele[key]}</td>
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