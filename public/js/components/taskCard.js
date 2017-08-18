import React from "react";
import Nav from '../containers/nav';

export default class TaskCard extends React.Component{
    addTakcard(){
        var name = document.getElementById("name").value;
        if(name === ''){
            alert("任务卡的名称不能为空");
        }else {
            this.props.onAdd({name});
        }
    }
    componentWillUpdate(nextProps){
        if(nextProps.addStatus === true){
            alert("添加成功");
            this.props.getAllTaskcard();
            this.props.reset();
        }else if(nextProps.addStatus === false){
            alert("添加失败");
        }
    }
    componentWillMount(){
        this.props.getAllTaskcard();
    }
    render(){
        return <div>
            <Nav/>
            <div className="position">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control"  placeholder="请输入任务卡名称" id="name"/>
                        </div>
                        <button type="button" className="btn btn-primary distance" onClick={this.addTakcard.bind(this)}>添加</button>
                    </div>
                </form>

            </div>
            <div className="col-md-4 col-md-offset-4">
            <table className="table table-bordered location">
                <thead>
                <tr className="active font">
                    <td className="col-md-1">ID</td>
                    <td className="col-md-1">名称</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.taskcards.map((ele,index)=>{
                        return <tr key={index}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
                </div>
            </div>

    }
}