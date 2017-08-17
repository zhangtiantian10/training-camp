import React from 'react';

export default class Week extends React.Component{
    componentWillUpdate(nextProps) {
        if(nextProps.addSuccess) {
            alert('添加成功!');
            this.props.onModifyAddSuccess();
        } else if(nextProps.addSuccess === false) {
            alert('添加失败!');
            this.props.onModifyAddSuccess();
        }
    }

    addWeek() {
        const weekCode = this.refs.weekCode.value;
        const startDate = this.refs.startDate.value;
        const endDate = this.refs.endDate.value;
        const cardNumber = this.refs.cardNumber.value;

        if(!weekCode || !startDate || !endDate || !cardNumber) {
            alert('输入不能为空!');
            return ;
        }
        this.props.onAdd({weekCode, startDate, endDate, cardNumber: parseInt(cardNumber)});
    }

    render() {
        return <div>
            <span>第几周</span>
            <input type="text" ref="weekCode"/>
            <span>开始时间</span>
            <input type="date" ref="startDate"/>
            <span>结束时间</span>
            <input type="date" ref="endDate"/>
            <span>任务卡数</span>
            <input type="text" ref="cardNumber"/>
            <button onClick={this.addWeek.bind(this)}>添加</button>
        </div>;
    }
}