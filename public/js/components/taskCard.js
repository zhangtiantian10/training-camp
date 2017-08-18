import React from "react";

export default class TaskCard extends React.Component{
    addTakcard(){
        var name = document.getElementById("name").value;
        if(name === ''){
            alert("任务卡的名称不能为空");
        }else {
            this.props.onAdd({name});
        }
    }
    render(){
        return <div className="position">
            <form className="form-inline">
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control"  placeholder="请输入任务卡名称" id="name"/>
                    </div>
                    <button type="button" className="btn btn-primary distance" onClick={this.addTakcard.bind(this)}>添加</button>
                </div>
            </form>
        </div>
    }
}