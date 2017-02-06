import React from 'react';
import '../sass/about.scss'
class AboutFaqs extends React.Component {
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
                <div className="faqs">
                    <h4>测试相关问题</h4>
                    <div className="faqs-list">
                        <h5 className="question">问题1</h5>
                        <div className="answer">回答是发挥到上发挥就好</div>
                    </div>
                    <div className="faqs-list">
                        <h5 className="question">问题1</h5>
                        <div className="answer">回答是发挥到上发挥就好</div>
                    </div>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutFaqs;
