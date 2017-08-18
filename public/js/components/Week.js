import React from 'react';

export default class Week extends React.Component{
    componentWillUpdate(nextProps) {
        if(nextProps.addSuccess) {
            alert('添加成功!');
            this.props.onModifyAddSuccess();
        } else if(nextProps.addSuccess === false) {
            alert('添加失败!');
            this.props.onModifyAddSuccess();
        }
    }

    componentDidMount() {
        this.props.getAllWeeks();
    }

    addWeek() {
        const weekCode = this.refs.weekCode.value;
        const startDate = this.refs.startDate.value;
        const endDate = this.refs.endDate.value;
        const cardNumber = this.refs.cardNumber.value;

        if(!weekCode || !startDate || !endDate || !cardNumber) {
            alert('输入不能为空!');
            return ;
        }
        this.props.onAdd({weekCode, startDate, endDate, cardNumber: parseInt(cardNumber)});
    }

    render() {
        console.log(this.props.weeks);
        return <div>
            <form className="col-md-9 col-md-offset-1 form-inline tablePaddingTop">
                <div className="form-group">
                    <label>第几周</label>
                    <input type="text" className="form-control" ref="weekCode" placeholder="第一周"/>
                </div>
                <div className="form-group">
                    <label>开始时间</label>
                    <input type="date" className="form-control" ref="startDate"/>
                </div>
                <div className="form-group">
                    <label>结束时间</label>
                    <input type="date" className="form-control" ref="endDate"/>
                </div>
                <div className="form-group">
                    <label>任务卡数</label>
                    <input type="text" className="form-control" ref="cardNumber" placeholder="1"/>
                </div>
                <button className="btn btn-default" onClick={this.addWeek.bind(this)}>添加</button>
            </form>
            <div className="col-md-8 col-md-offset-2 tablePaddingTop">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>周名</th>
                        <th>周名</th>
                        <th>周名</th>
                        <th>周名</th>
                        <th>周名</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weeks.map((w, i) => {
                        return <tr key={i} id={`${w.id}`}>
                            <td>{w.week_code}</td>
                            <td>{w.start_date.split('T')[0]}</td>
                            <td>{w.end_date.split('T')[0]}</td>
                            <td>
                                {w.card_number}
                            </td>
                            <td>
                                <button className="btn btn-default pull-center">修改</button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>

            </div>
        </div>;
    }
}