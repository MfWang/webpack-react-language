import React from 'react';
import '../sass/about.scss'
class AboutEvents extends React.Component {
    render() {
        return (
            <div className="contain">
                <div className="about-menu">
                    <div className="scroll">
                        <ul className="about-menu-ul">
                            <li className="active"><a href="">公司简介</a></li>
                            <li><a href="">招贤纳士</a></li>
                            <li><a href="">发展历程</a></li>
                            <li><a href="">联系我们</a></li>
                            <li><a href="">常见问题</a></li>
                            <li><a href="">隐私策略</a></li>
                            <li><a href="">使用条款</a></li>
                            <li><a href="">意见反馈</a></li>
                        </ul>
                    </div>
                </div>
                <div className="events">
                    <p className="year">2016</p>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line0"></span>
                        <span className="events-detail">荣获沙发交互觉得十分吉拉是</span>
                    </div>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line0"></span>
                        <span className="events-detail">荣获沙发交互觉得十分吉拉是</span>
                    </div>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line0"></span>
                        <span className="events-detail">荣获沙发交互觉得十分吉拉是</span>
                    </div>
                    <p className="year">2016</p>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line1"></span>
                        <span className="events-detail">荣获沙发交互觉得十分吉拉是荣获沙发交互觉得十分吉拉是荣获沙发交互觉得十分吉拉是荣获沙发交互觉得十分吉拉是</span>
                    </div>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line1"></span>
                        <span className="events-detail">荣获沙发交互觉得十分吉拉是</span>
                    </div>
                    <div className="detail">
                        <span className="month">10月</span>
                        <span className="line line1"></span>
                        <span className="events-detail noline">荣获沙发交互觉得十分吉拉是荣获沙发交互觉得十分吉拉是</span>
                    </div>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutEvents;
