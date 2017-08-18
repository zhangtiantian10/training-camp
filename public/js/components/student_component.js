import React, {Component} from "react";

class Student extends Component {


    componentDidUpdate() {
        var isSaved = this.props.isSaved;
        if (isSaved) {
            this.props.getAllStudent();
        }
    }

    componentWillMount() {
        this.props.getAllStudent();

    }

    onSubmit() {
        console.log("lalallaal");
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

    render() {
        return <div>
            <div className="position">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-info first">查找</button>
                    <button type="button" className="btn btn-info first" data-toggle="modal" data-target="#firstModal">
                        添加
                    </button>
                </form>
            </div>
            <div className="tablePosition">
                <table className="table table-bordered textStyle">
                    <tbody className="tableStyle">
                    <tr className="active">
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
                                <td className="textStyle">{element.name}</td>
                                <td className="textStyle">{element.zone}</td>
                                <td className="textStyle">{element.team}</td>
                                <td className="textStyle">{element.city}</td>
                                <td className="textStyle">{element.school}</td>
                                <td className="textStyle">{element.major}</td>
                                <td className="textStyle">{element.grade}</td>
                                <td className="textStyle">{element.gender}</td>
                                <td><input type="button" value="修改"
                                           className="btn btn-default"/></td>
                                <td>
                                    <button type="button" className="btn btn-default">
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
        </div>
    }
}

export default Student;