import React from "react";

export default class TaskCard extends React.Component{

    render(){
        return <div className="position">
            <form className="form-inline">
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control"  placeholder="请输入任务卡名称" id="name"/>
                    </div>
                    <button type="button" className="btn btn-primary distance" >添加</button>
                </div>
            </form>
        </div>
    }
}