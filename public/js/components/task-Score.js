import React, {Component} from "react";
import Nav from "../containers/nav";

class TaskScore extends Component{

    filterData(){
        const zone=$("#zone").val();
        const team=$("#team").val();
        const keyType=$("#keyType").val();
        console.log(zone,team,keyType);
        this.props.selectData({zone,team,keyType});
    }


    render(){
        return <div>
           <Nav/>
            <div className="col-md-offset-3 tablePaddingTop">
                <div className="col-md-2">
                    <select className="form-control textStyle" id="zone">
                        <option value="001" className="textStyle">001战区</option>
                        <option value="002" className="textStyle">002战区</option>
                        <option value="003" className="textStyle">003战区</option>
                        <option value="004" className="textStyle">004战区</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="team">
                        <option value="1" className="textStyle">一组</option>
                        <option value="2" className="textStyle">二组</option>
                        <option value="3" className="textStyle">三组</option>
                        <option value="4" className="textStyle">四组</option>
                        <option value="5" className="textStyle">五组</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="keyType">
                        <option value="student_name" className="textStyle">学生姓名</option>
                        <option value="taskcard_name" className="textStyle">任务卡名称</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.filterData.bind(this)}>查找</button>
                </div>
            </div>

            <div className="col-md-10 col-md-offset-1 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="col-md-1 textStyle">学生姓名</th>
                        <th className="col-md-1 textStyle">任务卡名称</th>
                        <th className="col-md-1 textStyle">完成日期</th>
                        <th className="col-md-1 textStyle">审阅日期</th>
                        <th className="col-md-1 textStyle">审阅得分</th>
                        <th className="col-md-1 textStyle">复审日期</th>
                        <th className="col-md-1 textStyle">复审得分</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
    }
}

export default TaskScore;