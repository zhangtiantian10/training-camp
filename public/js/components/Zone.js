import React from 'react';
import Nav from '../containers/nav';

export default class Zone extends React.Component {
    componentWillUpdate(nextProps) {
        if (nextProps.addSuccess === true) {
            alert('添加成功！');
            this.props.changeAddState();
        } else if(nextProps.addSuccess === false) {
            alert('添加失败!');
            this.props.changeAddState();
        }
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
                        <th className="textStyle col-md-1">战区名</th>
                        <th className="textStyle col-md-1">城市</th>
                        <th className="textStyle col-md-1">小组数</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    }
}