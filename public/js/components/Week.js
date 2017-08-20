import React from 'react';
import Nav from '../containers/nav';

export default class Week extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modifyId: 0
        };
    }

    componentWillUpdate(nextProps) {
        if(nextProps.addSuccess) {
            alert('添加成功!');
            this.props.getAllWeeks();
        } else if(nextProps.addSuccess === false) {
            alert('添加失败!');
            this.props.onModifyAddSuccess();
        }
        if (nextProps.modifySuccess) {
            alert("修改成功！");
            this.props.getAllWeeks();
        } else if(nextProps.modifySuccess === false) {
            alert("修改失败！");
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

    modifyStateId(id) {
        this.state.modifyId = id;
    }

    modifyWeek() {
        const weekCode = this.refs.modifyWeekCode.value;
        const startDate = this.refs.modifyStartDate.value;
        const endDate = this.refs.modifyEndDate.value;
        const cardNumber = this.refs.modifyCardNumber.value;
        const id = this.state.modifyId;

        this.props.modifyWeek({weekCode, startDate, endDate, cardNumber, id});
    }

    render() {
        console.log(this.props.modifySuccess);
        return <div>
            <Nav/>
            <form className="col-md-12 form-inline tablePaddingTop">
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
                <button type="button" className="btn btn-default" onClick={this.addWeek.bind(this)}>添加</button>
            </form>
            <div className="col-md-8 col-md-offset-2 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="textStyle">周名</th>
                        <th className="textStyle">开始时间</th>
                        <th className="textStyle">结束时间</th>
                        <th className="textStyle">任务卡数</th>
                        <th className="textStyle">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weeks.map((w, i) => {
                        return <tr key={i} id={`${w.id}`}>
                            <td className="textStyle">{w.week_code}</td>
                            <td className="textStyle">{w.start_date.split('T')[0]}</td>
                            <td className="textStyle">{w.end_date.split('T')[0]}</td>
                            <td className="textStyle">{w.card_number}</td>
                            <td>
                                <button className="btn btn-default" data-toggle="modal" data-target="#myModal" onClick={this.modifyStateId.bind(this, w.id)}>修改</button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>

            <div className="modal fade" tabindex="-1" id="myModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">修改周信息</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal col-md-offset-1">
                                <div className="form-group">
                                    <label className="col-md-3 control-label">第几周</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="modifyWeekCode" ref="modifyWeekCode"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">开始时间</label>
                                    <div className="col-md-7">
                                        <input type="date" className="form-control" id="modifyStartDate" ref="modifyStartDate"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">结束时间</label>
                                    <div className="col-md-7">
                                        <input type="date" className="form-control" id="modifyEndDate" ref="modifyEndDate"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">任务卡数</label>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="modifyCardNumber" ref="modifyCardNumber"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-primary" onClick={this.modifyWeek.bind(this)} data-dismiss="modal">修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}