import React, {Component} from "react";
import Nav from "../containers/nav";

class TaskScore extends Component {

    componentWillMount() {
        this.props.getAllTask();
        this.props.getAllZones();
    }

    componentWillUpdate(nextProps) {
        if (nextProps.isUpdate === true) {
            alert('添加成功！');
            this.props.changeState();
            this.filterData();
        } else if (nextProps.isUpdate === false) {
            alert('添加失败！');
            this.props.changeState();
        }


    }

    componentDidUpdate(){
        if(this.props.isFind === false){
            alert('此人不在该战区或该组！');
            this.props.getAllTask();
        }
    }


    filterData() {

        const studentId = $("#student").val();
        if(studentId === '') {
            this.props.getAllTask();
        } else {
            this.props.filterData({studentId});
        }
    }


    insertElement(element) {
        document.getElementById("taskInfo_id").value = element.id;
        document.getElementById("student_name").value = element.student_name;
        document.getElementById("task_name").value = element.task_name;
        document.getElementById("finished_date").value = element.finished_date;
        document.getElementById("review_date").value = element.review_date;
        document.getElementById("review_grade").value = element.review_grade;
        document.getElementById("upgrade_date").value = element.upgrade_date;
        document.getElementById("upgrade_grade").value = element.upgrade_grade;
    }

    onModify() {
        let taskInfo_id = document.getElementById("taskInfo_id").value;
        let student_name = document.getElementById("student_name").value;
        let task_name = document.getElementById("task_name").value;
        let finished_date = document.getElementById("finished_date").value;
        let review_date = document.getElementById("review_date").value;
        let review_grade = document.getElementById("review_grade").value;
        let upgrade_date = document.getElementById("upgrade_date").value;
        let upgrade_grade = document.getElementById("upgrade_grade").value;
        this.props.onModify({
            taskInfo_id,
            student_name,
            task_name,
            finished_date,
            review_date,
            review_grade,
            upgrade_date,
            upgrade_grade
        });
    }

    selectTeamForZone() {
        const zoneName = $('#zone').val();

        this.props.selectTeam(zoneName);
    }

    selectStudents() {
        const zone = $('#zone').val();
        const team = $('#team').val();

        this.props.selectStudents({zone, team});
    }

    render() {
        return <div>
            <Nav/>
            <div className="col-md-offset-3 tablePaddingTop">
                <div className="col-md-2">
                    <select className="form-control textStyle" id="zone" onChange={this.selectTeamForZone.bind(this)}>
                        <option value="" className="textStyle">请选择战区</option>
                        {this.props.zones.map((z, i) => {
                            return <option key={i} className="textStyle" value={z.name}>{z.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="team" onChange={this.selectStudents.bind(this)}>
                        <option value="" className="textStyle">请选择小组</option>
                        {this.props.teams.map((t, i) => {
                            return <option key={i} value={t.name} className="textStyle">{t.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="student">
                        <option value="" className="textStyle">请选择学生</option>
                        {this.props.students.map((s, i) => {
                            return <option key={i} value={s.id} className="textStyle">{s.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.filterData.bind(this)}>
                        查找
                    </button>
                </div>
            </div>

            <div className="col-md-11 taskScoreTable">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="col-md-1 textStyle">成绩编号</th>
                        <th className="col-md-1 textStyle">学生姓名</th>
                        <th className="col-md-1 textStyle">任务卡名称</th>
                        <th className="col-md-1 textStyle">完成日期</th>
                        <th className="col-md-1 textStyle">审阅日期</th>
                        <th className="col-md-1 textStyle">审阅得分</th>
                        <th className="col-md-1 textStyle">复审日期</th>
                        <th className="col-md-1 textStyle">复审得分</th>
                        <th className="col-md-1 textStyle">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.allTask.map((element, index)=> {
                            return <tr key={index}>
                                <td className="textStyle">{element.id}</td>
                                <td className="textStyle">{element.student_name}</td>
                                <td className="textStyle">{element.task_name}</td>
                                <td className="textStyle">{element.finished_date}</td>
                                <td className="textStyle">{element.review_date}</td>
                                <td className="textStyle">{element.review_grade}</td>
                                <td className="textStyle">{element.upgrade_date}</td>
                                <td className="textStyle">{element.upgrade_grade}</td>
                                <td className="textStyle">
                                    <button type="button" className="btn btn-default"
                                            data-toggle="modal" data-target="#secondModal"
                                            onClick={this.insertElement.bind(this, element)}>
                                        修改
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="secondModal" tabIndex="0" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title position" id="exampleModalLabel">修改学生信息</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-inline">
                                <div className="inputPosition">
                                    <label>成绩编号：</label>
                                    <input type="text" id="taskInfo_id" className="form-control" disabled/>
                                </div>
                                <div className="inputPosition">
                                    <label>学生姓名：</label>
                                    <input type="text" id="student_name" className="form-control" disabled/>
                                </div>
                                <div className="inputPosition">
                                    <label>任务卡名：</label>
                                    <input type="text" id="task_name" className="form-control" disabled/>
                                </div>
                                <div className="inputPosition">
                                    <label>完成日期：</label>
                                    <input type="date" id="finished_date" className="form-control"/>
                                </div>
                                <div className="inputPosition">
                                    <label>审阅日期：</label>
                                    <input type="date" id="review_date" className="form-control"/>
                                </div>
                                <div className="inputPosition">
                                    <label>审阅得分：</label>
                                    <input type="text" id="review_grade" className="form-control"/>
                                </div>
                                <div className="inputPosition">
                                    <label>复审日期：</label>
                                    <input type="date" id="upgrade_date" className="form-control"/>
                                </div>
                                <div className="inputPosition">
                                    <label>复审得分：</label>
                                    <input type="text" id="upgrade_grade" className="form-control"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">返回</button>
                            <button type="button" className="btn btn-info" onClick={this.onModify.bind(this)}
                                    data-dismiss="modal">提交
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TaskScore;