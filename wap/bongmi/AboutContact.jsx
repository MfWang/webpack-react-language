import React from 'react';
import '../sass/about.scss'
class AboutContact extends React.Component {
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
                <div className="contact">
                    <p className="company-name">杭州棒糖网络科技有限公司</p>
                    <div className="info">
                        <table>
                            <tr>
                                <td>地址：</td>
                                <td>杭州市滨江区越达巷92号创业软件大厦12楼</td>
                            </tr>
                            <tr>
                                <td>邮编：</td>
                                <td>310000</td>
                            </tr>
                            <tr>
                                <td>邮箱：</td>
                                <td>business@bongmi.com</td>
                            </tr>
                            <tr>
                                <td>电话：</td>
                                <td>(+86) 0571-56560756</td>
                            </tr>
                        </table>
                        <div className="code">
                            <img src="https://img.bongmi.cn/assets/images/ba29aac.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutContact;
