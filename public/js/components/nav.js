import React from "react";
import {browserHistory} from 'react-router';


export default class Nav extends React.Component{
    student(){
        browserHistory.push('/');
    }
    week(){
        browserHistory.push('/week');
    }
    taskcard(){
        browserHistory.push('/taskcard');
    }
    weekScore() {
        browserHistory.push('/weekScore');
    }

    taskScore(){
        browserHistory.push('/taskScore');
    }

    render(){
        return <div>
            <div className="logo">
                <h1 className="logoName">训练营积分管理系统</h1>
            </div>
            <ul className="nav">
                <li><span className="colorA" onClick={this.student.bind(this)}>学生信息管理</span></li>
                <li><span className="colorA" onClick={this.week.bind(this)}>周表管理</span></li>
                <li><span className="colorA" onClick={this.weekScore.bind(this)}>周成绩管理</span></li>
                <li><span className="colorA" onClick={this.taskcard.bind(this)}>任务卡管理</span></li>
                <li><span className="colorA" onClick={this.taskScore.bind(this)}>任务卡成绩</span></li>
                <li><span className="colorA">积分榜管理</span></li>
                <li><span className="colorA">助教管理</span></li>
            </ul>
        </div>;
    }
}