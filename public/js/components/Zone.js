import React from 'react';
import Nav from '../containers/nav';

export default class Zone extends React.Component {
    componentWillUpdate(nextProps) {
        if (nextProps.addSuccess === true) {
            alert('添加成功！');
            this.props.getAllZones();
        } else if(nextProps.addSuccess === false) {
            alert('添加失败,战区名不能重复！');
            this.props.changeSuccess();
        }

        if(nextProps.getSuccess === false) {
            alert('获取信息失败！');
            this.props.changeSuccess();
        }
    }

    componentWillMount() {
        this.props.getAllZones();
    }

    onAddZone() {
        const name = this.refs.zoneName.value;
        const city = this.refs.city.value;

        if(!name || !city) {
            alert('输入内容不能为空！');
        }

        this.props.addZone({name, city});
    }

    render() {

        console.log(this.props.zones);
        return <div>
            <Nav/>
            <form className="col-md-10 col-md-offset-2 form-inline tablePaddingTop">
                <div className="form-group col-md-4">
                    <label>战区</label>
                    <input type="text" className="form-control" ref="zoneName" placeholder="001战区"/>
                </div>
                <div className="form-group col-md-4">
                    <label>城市</label>
                    <input type="text" className="form-control" ref="city" placeholder="西安市"/>
                </div>

                <div className="form-group col-md-1">
                    <button type="button" className="btn btn-default" onClick={this.onAddZone.bind(this)}>添加</button>
                </div>
            </form>
            <div className="col-md-8 col-md-offset-2 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="textStyle col-md-2">战区名</th>
                        <th className="textStyle col-md-2">城市</th>
                        <th className="textStyle col-md-2">小组数</th>
                        <th className="textStyle col-md-1">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.zones.map((z, i) => {
                        return <tr key={i} id={`${z.id}`}>
                            <td className="textStyle">{z.name}</td>
                            <td className="textStyle">{z.city}</td>
                            <td className="textStyle">{z.team_number}</td>
                            <td>
                                <button className="btn btn-default" data-toggle="modal" data-target="#myModal">修改</button>
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
                            <button type="button" className="btn btn-primary" data-dismiss="modal">修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}