import React, { Component } from 'react';

class Days extends Component{
    state={
        date:new Date()
    }
    render(){
        const {date}=this.state;
        return(
            <h5> 오늘은 {date.getDay()===0
                ? "일요일"
                :date.getDay()===1
                ? "월요일"
                :date.getDay()===2                    
                ? "화요일"
                : date.getDay()===3
                ? "수요일"
                :date.getDay()===4
                ? "목요일"
                :date.getDay()===5
                ? "금요일"
                :"토요일"}
                입니다!
                </h5>
        );
    }

}
export default Days;