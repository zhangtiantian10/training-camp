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

    totalScore(){
        browserHistory.push('/totalScore')
    }

    zone() {
        browserHistory.push('/zone');
    }

    team() {
        browserHistory.push('/team');
    }

    render(){
        return <div>
            <div className="logo">
                <h1 className="logoName">训练营积分管理系统</h1>
            </div>
            <ul className="nav">
                <li><span className="colorA" onClick={this.zone.bind(this)}>战区</span></li>
                <li><span className="colorA" onClick={this.team.bind(this)}>小组</span></li>
                <li><span className="colorA" onClick={this.student.bind(this)}>学生信息</span></li>
                <li><span className="colorA" onClick={this.week.bind(this)}>周信息</span></li>
                <li><span className="colorA" onClick={this.weekScore.bind(this)}>周成绩</span></li>
                <li><span className="colorA" onClick={this.taskcard.bind(this)}>任务卡</span></li>
                <li><span className="colorA" onClick={this.taskScore.bind(this)}>任务卡成绩</span></li>
                <li><span className="colorA" onClick={this.totalScore.bind(this)}>积分榜</span></li>
                <li><span className="colorA">助教管理</span></li>
            </ul>
        </div>;
    }
}