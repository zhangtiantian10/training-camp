import React, {Component} from "react";
import Nav from '../containers/nav'

class Student extends Component {


    componentDidUpdate() {
        var isSaved = this.props.isSaved;
        if (isSaved) {
            this.props.getAllStudent();
            return 0;
        }
        var isRemoved = this.props.isRemoved;
        if (isRemoved) {
            this.props.getAllStudent();
        }
    }

    componentWillMount() {
        this.props.getAllStudent();

    }

    onSubmit() {
        let name = document.getElementById("name").value;
        let zone = document.getElementById("zone").value;
        let group = document.getElementById("team").value;
        let city = document.getElementById("city").value;
        let school = document.getElementById("school").value;
        let major = document.getElementById("major").value;
        let grade = document.getElementById("grade").value;
        let gender = document.getElementById("gender").value;
        if (name == "" || zone == "" || group == "" || city == "" || school == "" || major == "" || grade == "" || gender == "") {
            alert("请补全信息");
        } else {
            this.props.onSubmit({name, zone, group, city, school, major, grade, gender});
        }
        document.getElementById("name").value = "";
        document.getElementById("zone").value = "";
        document.getElementById("team").value = "";
        document.getElementById("city").value = "";
        document.getElementById("school").value = "";
        document.getElementById("major").value = "";
        document.getElementById("grade").value = "";
        document.getElementById("gender").value = "";

    }


    onRemove(id) {
        console.log("id", id);
        this.props.onRemove(id);
    }

    onSearch() {
        const student_id = document.getElementById("student_id").value;
        this.props.onSearch(student_id);
    }

    insertValue(information) {
        console.log(information);
        document.getElementById("modify_id").value = information.id;
        document.getElementById("modify_name").value = information.name;
        document.getElementById("modify_zone").value = information.zone;
        document.getElementById("modify_team").value = information.team;
        document.getElementById("modify_city").value = information.city;
        document.getElementById("modify_school").value = information.school;
        document.getElementById("modify_major").value = information.major;
        document.getElementById("modify_grade").value = information.grade;
        document.getElementById("modify_gender").value = information.gender;
    }

    onModify() {
        let id = document.getElementById("modify_id").value;
        let name = document.getElementById("modify_name").value;
        let zone = document.getElementById("modify_zone").value;
        let group = document.getElementById("modify_team").value;
        let city = document.getElementById("modify_city").value;
        let school = document.getElementById("modify_school").value;
        let major = document.getElementById("modify_major").value;
        let grade = document.getElementById("modify_grade").value;
        let gender = document.getElementById("modify_gender").value;
        if (name == "" || zone == "" || group == "" || city == "" || school == "" || major == "" || grade == "" || gender == "") {
            alert("请补全信息");
        } else {
            this.props.onModify({id, name, zone, group, city, school, major, grade, gender});
        }
        document.getElementById("modify_id").value = "";
        document.getElementById("modify_name").value = "";
        document.getElementById("modify_zone").value = "";
        document.getElementById("modify_team").value = "";
        document.getElementById("modify_city").value = "";
        document.getElementById("modify_school").value = "";
        document.getElementById("modify_major").value = "";
        document.getElementById("modify_grade").value = "";
        document.getElementById("modify_gender").value = "";
    }

    render() {
        return <div>
            <Nav/>
            <div className="position">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="输入学生ID" id="student_id"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-info first" onClick={this.onSearch.bind(this)}>查找</button>
                    <button type="button" className="btn btn-info first" data-toggle="modal" data-target="#firstModal">
                        添加
                    </button>
                </form>
            </div>
            <div className="tablePosition">
                <table className="table table-bordered textStyle">
                    <tbody className="tableStyle">
                    <tr className="active">
                        <th className="textStyle">ID</th>
                        <th className="textStyle">姓名</th>
                        <th className="textStyle">战区</th>
                        <th className="textStyle">组号</th>
                        <th className="textStyle">城市</th>
                        <th className="textStyle">学校</th>
                        <th className="textStyle">专业</th>
                        <th className="textStyle">年级</th>
                        <th className="textStyle">性别</th>
                        <th className="textStyle" colSpan="2">操作</th>
                    </tr>
                    {
                        this.props.allStudent.map((element)=> {
                            return <tr>
                                <td className="textStyle">{element.id}</td>
                                <td className="textStyle">{element.name}</td>
                                <td className="textStyle">{element.zone}</td>
                                <td className="textStyle">{element.team}</td>
                                <td className="textStyle">{element.city}</td>
                                <td className="textStyle">{element.school}</td>
                                <td className="textStyle">{element.major}</td>
                                <td className="textStyle">{element.grade}</td>
                                <td className="textStyle">{element.gender}</td>
                                <td>
                                    <button type="button" className="btn btn-default"
                                            data-toggle="modal" data-target="#secondModal"
                                            onClick={this.insertValue.bind(this, element)}>修改
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-default"
                                            onClick={this.onRemove.bind(this, element.id)}>
                                        删除
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="firstModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title position" id="exampleModalLabel">添加学生信息</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-inline">
                                <div className="inputPosition">
                                    <label>姓名：</label>
                                    <input type="text" className="btn btn-default" id="name"/>
                                </div>
                                <div className="inputPosition">
                                    <label>战区：</label>
                                    <input type="text" className="btn btn-default" id="zone"/>
                                </div>
                                <div className="inputPosition">
                                    <label>组号：</label>
                                    <input type="text" className="btn btn-default" id="team"/>
                                </div>
                                <div className="inputPosition">
                                    <label>城市：</label>
                                    <input type="text" className="btn btn-default" id="city"/>
                                </div>
                                <div className="inputPosition">
                                    <label>学校：</label>
                                    <input type="text" className="btn btn-default" id="school"/>
                                </div>
                                <div className="inputPosition">
                                    <label>专业：</label>
                                    <input type="text" className="btn btn-default" id="major"/>
                                </div>
                                <div className="inputPosition">
                                    <label>年级：</label>
                                    <input type="text" className="btn btn-default" id="grade"/>
                                </div>
                                <div className="inputPosition">
                                    <label>性别：</label>
                                    <input type="text" className="btn btn-default" id="gender"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">返回</button>
                            <button type="button" className="btn btn-info " id="submit"
                                    onClick={this.onSubmit.bind(this)} data-dismiss="modal">提交
                            </button>
                        </div>
                    </div>
                </div>
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
                                    <label> I D：</label>
                                    <input type="text" className="btn btn-default" id="modify_id"/>
                                </div>
                                <div className="inputPosition">
                                    <label>姓名：</label>
                                    <input type="text" className="btn btn-default" id="modify_name"/>
                                </div>
                                <div className="inputPosition">
                                    <label>战区：</label>
                                    <input type="text" className="btn btn-default" id="modify_zone"/>
                                </div>
                                <div className="inputPosition">
                                    <label>组号：</label>
                                    <input type="text" className="btn btn-default" id="modify_team"/>
                                </div>
                                <div className="inputPosition">
                                    <label>城市：</label>
                                    <input type="text" className="btn btn-default" id="modify_city"/>
                                </div>
                                <div className="inputPosition">
                                    <label>学校：</label>
                                    <input type="text" className="btn btn-default" id="modify_school"/>
                                </div>
                                <div className="inputPosition">
                                    <label>专业：</label>
                                    <input type="text" className="btn btn-default" id="modify_major"/>
                                </div>
                                <div className="inputPosition">
                                    <label>年级：</label>
                                    <input type="text" className="btn btn-default" id="modify_grade"/>
                                </div>
                                <div className="inputPosition">
                                    <label>性别：</label>
                                    <input type="text" className="btn btn-default" id="modify_gender"/>
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

export default Student;