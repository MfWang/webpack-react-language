import React from 'react';
import '../sass/about.scss'
class AboutPrivacy extends React.Component {
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
                <div className="privacy">
                    <p>保护用户隐私是棒糖网络科技的重点原则，棒糖网络科技通过技术手段、提供隐私保护服务功能、强化内部管理等办法充分保护用户的个人资料安全。 本隐私声明适用于棒糖网络科技的所有相关服务，随着棒糖网络科技服务范围的扩大，隐私声明的内容可由棒糖网络科技随时更新，且毋须另行通知。更新后的隐私声明一旦在网页上公布即有效代替原来的隐私声明。</p>
                    <p>棒糖网络科技严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。 棒糖网络科技会在法律要求或符合棒糖网络科技的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：</p>
                    <p>(a) 满足法律或行政法规的明文规定，或者符合棒糖网络科技站适用的法律程序；</p>
                    <p>(b) 符合棒糖网络科技相关服务条款、软件许可使用协议的约定；</p>
                    <p>(c) 保护棒糖网络科技的权利或财产，以及在紧急情况下保护棒糖网络科技员工、棒糖网络科技产品或服务的用户或大众的个人安全。</p>
                    <p>棒糖网络科技不会未经您的允许将这些信息与第三方共享，本声明已经列出的上述情况除外。</p>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutPrivacy;
