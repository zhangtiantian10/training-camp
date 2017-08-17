import React from 'react';

export default class Hello extends React.Component {
    onSubmit(){
        let name=document.getElementById("name").value;
        let zone=document.getElementById("zone").value;
        let group=document.getElementById("group").value;
        let city=document.getElementById("city").value;
        let school=document.getElementById("school").value;
        let major=document.getElementById("major").value;
        let grade=document.getElementById("grade").value;
        let gender=document.getElementById("gender").value;
        if(name == "" || zone == "" || group == "" || city == "" || school == "" ||major =="" || grade== "" || gender == ""){
            alert("请补全信息");
        }else{
            this.props.onSubmit({name,zone,group,city,school,major,grade,gender});
        }
    }

    componentDidUpdate() {
        var isSaved = this.props.isSaved;
        if (isSaved) {
            alert("添加成功");
        } else {
            alert("添加失败");
        }
    }


    render () {
        return <div>
           <div>
               <label htmlFor="name">姓名：</label>
               <input type="text" id="name"/>
           </div>
            <div>
                <label htmlFor="zone">战区</label>
                <input type="text" id="zone"/>
            </div>
            <div>
                <label htmlFor="group">组号：</label>
                <input type="text" id="group"/>
            </div>
            <div>
                <label htmlFor="city">城市</label>
                <input type="text" id="city"/>
            </div>
            <div>
                <label htmlFor="school">学校：</label>
                <input type="text" id="school"/>
            </div>

            <div>
                <label htmlFor="major">专业：</label>
                <input type="text" id="major"/>
            </div>
            <div>
                <label htmlFor="grade">年级</label>
                <input type="text" id="grade"/>
            </div>
            <div>
                <label htmlFor="gender">性别</label>
                <input type="text" id="gender"/>
            </div>
            <div>
                <button onClick={this.onSubmit.bind(this)}>提交信息</button>
            </div>
        </div>
    }
}